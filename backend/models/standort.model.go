package models

import (
	"time"

	"github.com/google/uuid"
)

type Standort struct {
	ID        uuid.UUID `gorm:"type:uuid;default:uuid_generate_v4();primary_key" json:"id,omitempty"`
	Coord     string    `gorm:"uniqueIndex;not null" json:"coord,omitempty"`
	Strasse   string    `gorm:"not null" json:"strasse,omitempty"`
	Nummer    int       `gorm:"not null" json:"nummer,omitempty"`
	Zip       int       `gorm:"not null" json:"zip,omitempty"`
	Stadt     string    `gorm:"not null" json:"stadt,omitempty"`
	Bild      string    `gorm:"not null" json:"bild,omitempty"`
	Text      string    `gorm:"not null" json:"text,omitempty"`
	User      uuid.UUID `gorm:"not null" json:"user,omitempty"`
	CreatedAt time.Time `gorm:"not null" json:"created_at,omitempty"`
	UpdatedAt time.Time `gorm:"not null" json:"updated_at,omitempty"`
}

type CreateStandortRequest struct {
	Coord     string    `json:"coord"  binding:"required"`
	Strasse   string    `json:"strasse" binding:"required"`
	Nummer    int       `json:"nummer" binding:"required"`
	Zip       int       `json:"zip" binding:"required"`
	Stadt     string    `json:"stadt" binding:"required"`
	Bild      string    `json:"bild" binding:"required"`
	Text      string    `json:"text" binding:"required"`
	User      string    `json:"user,omitempty"`
	CreatedAt time.Time `json:"created_at,omitempty"`
	UpdatedAt time.Time `json:"updated_at,omitempty"`
}

type UpdateStandort struct {
	Coord     string    `json:"coord,omitempty"`
	Strasse   string    `json:"strasse,omitempty"`
	Nummer    int       `json:"nummer,omitempty"`
	Zip       int       `json:"bild,omitempty"`
	Stadt     string    `json:"stadt,omitempty"`
	Bild      string    `json:"bild,omitempty"`
	Text      string    `json:"text,omitempty"`
	User      string    `json:"user,omitempty"`
	CreateAt  time.Time `json:"created_at,omitempty"`
	UpdatedAt time.Time `json:"updated_at,omitempty"`
}
