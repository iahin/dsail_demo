const contentful = require('contentful')

const client = contentful.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
	space: "azdoe4z0judr",
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: "_KBfhG7Px9ZSTcXqgl3gqmDZGprLntIkVYX_v_yjrsI"
});

export { client } 
