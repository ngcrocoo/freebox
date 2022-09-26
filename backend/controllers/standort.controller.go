package controllers

import (
	"net/http"
	"strconv"
	"strings"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/s-bartsch/gogormpostcrud/golang-gorm-postgres/models"
	"gorm.io/gorm"
)

type StandortController struct {
	DB *gorm.DB
}

type StandortNoAuthController struct {
	DB *gorm.DB
}

func NewStandortController(DB *gorm.DB) StandortController {
	return StandortController{DB}
}

func NewStandortNoAuthController(DB *gorm.DB) StandortNoAuthController {
	return StandortNoAuthController{DB}
}

func (pc *StandortController) CreateStandort(ctx *gin.Context) {
	currentUser := ctx.MustGet("currentUser").(models.User)
	var payload *models.CreateStandortRequest

	if err := ctx.ShouldBindJSON(&payload); err != nil {
		ctx.JSON(http.StatusBadRequest, err.Error())
		return
	}

	now := time.Now()
	newStandort := models.Standort{
		Coord:     payload.Coord,
		Strasse:   payload.Strasse,
		Nummer:    payload.Nummer,
		Zip:       payload.Zip,
		Stadt:     payload.Stadt,
		Bild:      payload.Bild,
		Text:      payload.Text,
		User:      currentUser.ID,
		CreatedAt: now,
		UpdatedAt: now,
	}

	result := pc.DB.Create(&newStandort)
	if result.Error != nil {
		if strings.Contains(result.Error.Error(), "duplicate key") {
			ctx.JSON(http.StatusConflict, gin.H{"status": "fail", "message": "Standort with those coordinates already exists"})
			return
		}
		ctx.JSON(http.StatusBadGateway, gin.H{"status": "error", "message": result.Error.Error()})
		return
	}

	ctx.JSON(http.StatusCreated, gin.H{"status": "success", "data": newStandort})
}

func (pc *StandortController) UpdateStandort(ctx *gin.Context) {
	standortId := ctx.Param("standortId")
	currentUser := ctx.MustGet("currentUser").(models.User)

	var payload *models.UpdateStandort
	if err := ctx.ShouldBindJSON(&payload); err != nil {
		ctx.JSON(http.StatusBadGateway, gin.H{"status": "fail", "message": err.Error()})
		return
	}
	var updatedStandort models.Standort
	result := pc.DB.First(&updatedStandort, "id = ?", standortId)
	if result.Error != nil {
		ctx.JSON(http.StatusNotFound, gin.H{"status": "fail", "message": "No standort with that title exists"})
		return
	}
	now := time.Now()
	standortToUpdate := models.Standort{
		Coord:     payload.Coord,
		Strasse:   payload.Strasse,
		Nummer:    payload.Nummer,
		Zip:       payload.Zip,
		Stadt:     payload.Stadt,
		Bild:      payload.Bild,
		Text:      payload.Text,
		User:      currentUser.ID,
		CreatedAt: updatedStandort.CreatedAt,
		UpdatedAt: now,
	}

	pc.DB.Model(&updatedStandort).Updates(standortToUpdate)

	ctx.JSON(http.StatusOK, gin.H{"status": "success", "data": updatedStandort})
}

func (pc *StandortController) FindStandortById(ctx *gin.Context) {
	standortId := ctx.Param("standortId")

	var standort models.Standort
	result := pc.DB.First(&standort, "id = ?", standortId)
	if result.Error != nil {
		ctx.JSON(http.StatusNotFound, gin.H{"status": "fail", "message": "No standort with that title exists"})
		return
	}

	ctx.JSON(http.StatusOK, gin.H{"status": "success", "data": standort})
}

func (pc *StandortController) FindStandorte(ctx *gin.Context) {
	var page = ctx.DefaultQuery("page", "1")
	var limit = ctx.DefaultQuery("limit", "1000")

	intPage, _ := strconv.Atoi(page)
	intLimit, _ := strconv.Atoi(limit)
	offset := (intPage - 1) * intLimit

	var standorte []models.Standort
	results := pc.DB.Limit(intLimit).Offset(offset).Find(&standorte)
	if results.Error != nil {
		ctx.JSON(http.StatusBadGateway, gin.H{"status": "error", "message": results.Error})
		return
	}

	ctx.JSON(http.StatusOK, gin.H{"status": "success", "results": len(standorte), "data": standorte})
}

func (pc *StandortController) DeleteStandort(ctx *gin.Context) {
	standortId := ctx.Param("standortId")

	result := pc.DB.Delete(&models.Standort{}, "id = ?", standortId)

	if result.Error != nil {
		ctx.JSON(http.StatusNotFound, gin.H{"status": "fail", "message": "No standort with that title exists"})
		return
	}

	ctx.JSON(http.StatusNoContent, nil)
}

func (pc *StandortNoAuthController) FindStandorte(ctx *gin.Context) {
	var page = ctx.DefaultQuery("page", "1")
	var limit = ctx.DefaultQuery("limit", "10")

	intPage, _ := strconv.Atoi(page)
	intLimit, _ := strconv.Atoi(limit)
	offset := (intPage - 1) * intLimit

	var standorte []models.Standort
	results := pc.DB.Limit(intLimit).Offset(offset).Find(&standorte)
	if results.Error != nil {
		ctx.JSON(http.StatusBadGateway, gin.H{"status": "error", "message": results.Error})
		return
	}

	ctx.JSON(http.StatusOK, gin.H{"status": "success", "results": len(standorte), "data": standorte})
}
