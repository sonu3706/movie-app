package com.app.movie.model;

public class Review {

    private String reviewId;
    private String reviewContent;
    private String reviewAddedOn;
    private String reviewAddedBy;

    public String getReviewId() {
        return reviewId;
    }

    public void setReviewId(String reviewId) {
        this.reviewId = reviewId;
    }

    public String getReviewContent() {
        return reviewContent;
    }

    public void setReviewContent(String reviewContent) {
        this.reviewContent = reviewContent;
    }

    public String getReviewAddedOn() {
        return reviewAddedOn;
    }

    public void setReviewAddedOn(String reviewAddedOn) {
        this.reviewAddedOn = reviewAddedOn;
    }

    public String getReviewAddedBy() {
        return reviewAddedBy;
    }

    public void setReviewAddedBy(String reviewAddedBy) {
        this.reviewAddedBy = reviewAddedBy;
    }

    @Override
    public String toString() {
        return "Review{" +
                "reviewId='" + reviewId + '\'' +
                ", reviewContent='" + reviewContent + '\'' +
                ", reviewAddedOn='" + reviewAddedOn + '\'' +
                ", reviewAddedBy='" + reviewAddedBy + '\'' +
                '}';
    }
}
