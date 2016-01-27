import Rating from '../db/models/rating'

export default {
  ratingPost: (req, res, next) => {
    if (req.params.userId && req.body && req.query.rater) {
      console.log(req.body)
      req.body.rating = parseInt(req.body.rating)
      console.log(req.body)
      Rating.createRating(req.query.rater, req.params.userId, req.body)
        .then((rating) => {
          console.log(rating)
          res.json(rating)
        })
    }
  },
  ratingGet: (req, res, next) => {
    if (req.params.userId) {
      Rating.getAllUserRatings(req.params.userId)
        .then((ratings) => {
          console.log(ratings)
          res.json(ratings)
        })
    }
  }
}