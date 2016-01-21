// import the config file based on env 
// all config variables are capitalized 
const configFile = `\./${process.env.NODE_ENV || 'development'}.json`

const config = require(configFile)

// environment specfic configurations (secret), some data may not be needed now. Just for future features
config.PORT = process.env.PORT || 3000
config.DEBUG = process.env.DEBUG || true
config.S3_BUCKET = process.env.S3_BUCKET || ''
config.AWS_ACCESS_KEY_ID = process.env.AWS_ACCESS_KEY_ID || ''
config.AWS_SECRET_KEY = process.env.AWS_SECRET_KEY || ''
config.DATABASE_URI = process.env.GRAPHSTORY_URL || ''
config.FACEBOOK_APP_ID = process.env.FACEBOOK_APP_ID || ''
config.FACEBOOK_APP_SECRET = process.env.FACEBOOK_APP_SECRET || ''
config.FACEBOOK_CALLBACK_URL = process.env.FACEBOOK_CALLBACK_URL || ''
config.GOOGLE_APP_ID = process.env.GOOGLE_APP_ID || ''
config.GOOGLE_APP_SECRET = process.env.GOOGLE_APP_SECRET || ''

export default config
