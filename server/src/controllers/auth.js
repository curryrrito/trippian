import passport from 'passport'
import User from '../db/models/user'

export default {

  logout: function(req, res) {
    // console.log(req.session)
    req.logout()
    res.clearCookie('trippianPass')
    res.redirect('/')
  },
  // function that validates whether the user is logged in
  
  validateGoogle: (req, res, next) => {
    // console.log('this is image: ', req.user._json.image.url)
    // console.log('this is display name: ', req.user.displayName)
    // console.log('this is google id: ', req.user.id)
    // console.log('this is email: ', req.user.emails[0].value)

    req.session.name = req.user.displayName

    // making google id into a string because neo4j can't have 
    // very large integers
    let googleId = `"${req.user.id}"`
    req.session.googleId = googleId
    req.session.picture = req.user._json.image.url
    req.session.email = req.user.emails[0].value

    User.getUserByParameter('googleId', googleId)
      .then(user => {
        if (!user.length) {
          User.createUser({
            googleId,
            name: req.user.displayName,
            email: req.user.emails[0].value,
            picture: req.user._json.image.url
          })
          .then(newUser => {
            res.cookie('trippianPass', {
              googleId,
              id: newUser.id,
              name: req.user.displayName
            })
            res.redirect('/')
          })
        } else {
          res.cookie('trippianPass', {
            googleId,
            id: user.id,
            name: req.user.displayName
          })
          res.redirect('/')
        }
      })
  },

  validateFacebook: (req, res, next) => {
    req.session.name = req.user.displayName
    req.session.facebookId = req.user.id
    req.session.picture = `https://graph.facebook.com/${req.user.id}/picture?height=500`
    req.session.email = req.user.emails[0].value

    User.getUserByParameter('facbookId', req.user.id)
      .then(user => {
        if (!user.length) {
          User.createUser({
            facebookId: req.user.id,
            name: req.user.displayName,
            email: req.user.emails[0].value,
            picture: `https://graph.facebook.com/${req.user.id}/picture?height=500`
          })
          .then(newUser => {
            res.cookie('trippianPass', {
              facebookId: req.user.id,
              id: newUser.id,
              name: req.user.displayName
            })
            res.redirect('/')
          })
        } else {
          res.cookie('trippianPass', {
            facebookId: req.user.id,
            id: user.id,
            name: req.user.displayName
          })
          res.redirect('/')
        }
      })
  },

  facebook: passport.authenticate('facebook'),
  facebookCallback: passport.authenticate('facebook', { failureRedirect: '/' }),

  google: passport.authenticate('google', {
    scope: ['profile', 'email']
  }),
  googleCallback: passport.authenticate('google', {
    failureRedirect: '/'
  })

}