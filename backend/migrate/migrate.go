package main

import (
	"fmt"
	"log"

	"github.com/s-bartsch/gogormpostcrud/golang-gorm-postgres/initializers"
	"github.com/s-bartsch/gogormpostcrud/golang-gorm-postgres/models"
)

func init() {
	config, err := initializers.LoadConfig(".")
	if err != nil {
		log.Fatal("🚀 Could not load environment variables", err)
	}

	initializers.ConnectDB(&config)
}

func main() {
	initializers.DB.AutoMigrate(&models.User{}, &models.Standort{})
	fmt.Println("👍 Migration complete")
}
