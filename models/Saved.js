var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

var SavedSchema = new Schema({
  // `title` is required and of type String
  __id:{
      type:String,
      required: true
  },
  title: {
    type: String,
    required: true
  },
  // `link` is required and of type String
  link: {
    type: String,
    required: true
  },
  note: {
    type: Schema.Types.ObjectId,
    ref: "Note"
  }
});

// This creates our model from the above schema, using mongoose's model method
var Saved = mongoose.model("Saved", SavedSchema);

// Export the Saved model
module.exports = Saved;
