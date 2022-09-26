package routes

import (
	"github.com/gin-gonic/gin"
	"github.com/s-bartsch/gogormpostcrud/golang-gorm-postgres/controllers"
	"github.com/s-bartsch/gogormpostcrud/golang-gorm-postgres/middleware"
)

type StandortRouteController struct {
	standortController controllers.StandortController
}

type StandortNoAuthRouteController struct {
	standortNoAuthController controllers.StandortNoAuthController
}

func NewRouteStandortController(standortController controllers.StandortController) StandortRouteController {
	return StandortRouteController{standortController}
}
func NewRouteStandortNoAuthController(standortNoAuthController controllers.StandortNoAuthController) StandortNoAuthRouteController {
	return StandortNoAuthRouteController{standortNoAuthController}
}

func (pc *StandortRouteController) StandortRoute(rg *gin.RouterGroup) {

	router := rg.Group("standorte")
	router.Use(middleware.DeserializeUser())
	router.POST("/", pc.standortController.CreateStandort)
	router.PUT("/:standortId", pc.standortController.UpdateStandort)
	router.GET("/:standortId", pc.standortController.FindStandortById)
	router.DELETE("/:standortId", pc.standortController.DeleteStandort)
}

func (pc *StandortNoAuthRouteController) StandortNoAuthRoute(rg *gin.RouterGroup) {

	router := rg.Group("standorte-noauth")
	router.GET("/", pc.standortNoAuthController.FindStandorte)
}
