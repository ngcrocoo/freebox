package main

import (
	"log"
	"net/http"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"github.com/s-bartsch/gogormpostcrud/golang-gorm-postgres/controllers"
	"github.com/s-bartsch/gogormpostcrud/golang-gorm-postgres/initializers"
	"github.com/s-bartsch/gogormpostcrud/golang-gorm-postgres/routes"
)

var (
	server              *gin.Engine
	AuthController      controllers.AuthController
	AuthRouteController routes.AuthRouteController

	UserController      controllers.UserController
	UserRouteController routes.UserRouteController

	StandortController      controllers.StandortController
	StandortRouteController routes.StandortRouteController

	StandortNoAuthController      controllers.StandortNoAuthController
	StandortNoAuthRouteController routes.StandortNoAuthRouteController
)

func init() {
	config, err := initializers.LoadConfig(".")
	if err != nil {
		log.Fatal("🚀 Could not load environment variables", err)
	}

	initializers.ConnectDB(&config)

	AuthController = controllers.NewAuthController(initializers.DB)
	AuthRouteController = routes.NewAuthRouteController(AuthController)

	UserController = controllers.NewUserController(initializers.DB)
	UserRouteController = routes.NewRouteUserController(UserController)

	StandortController = controllers.NewStandortController(initializers.DB)
	StandortRouteController = routes.NewRouteStandortController(StandortController)

	StandortNoAuthController = controllers.NewStandortNoAuthController(initializers.DB)
	StandortNoAuthRouteController = routes.NewRouteStandortNoAuthController(StandortNoAuthController)

	server = gin.Default()
}

func main() {
	config, err := initializers.LoadConfig(".")
	if err != nil {
		log.Fatal("🚀 Could not load environment variables", err)
	}

	corsConfig := cors.DefaultConfig()
	corsConfig.AllowOrigins = []string{"*", "http://127.0.0.1*", config.ClientOrigin}
	corsConfig.AllowCredentials = true
	corsConfig.AllowHeaders = []string{"Authorization"}
	server.Use(cors.New(corsConfig))

	router := server.Group("/api")
	router.GET("/healthchecker", func(ctx *gin.Context) {
		message := "Welcome to Golang with Gorm and Postgres"
		ctx.JSON(http.StatusOK, gin.H{"status": "success", "message": message})
	})

	AuthRouteController.AuthRoute(router)
	UserRouteController.UserRoute(router)
	StandortRouteController.StandortRoute(router)
	StandortNoAuthRouteController.StandortNoAuthRoute(router)
	log.Fatal(server.Run(":" + config.ServerPort))
}
