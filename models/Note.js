var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var noteSchema = new Schema ({
    headline: {
        type: Schema, String, objectId,
        ref: "Headline"

    },
        date: String,
        noteText: String

});

var Note = mongoose.model("Note", noteSchema);

module.exports = Note;