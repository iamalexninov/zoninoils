const mongoose = require("mongoose");
const slug = require("mongoose-slug-generator");

const subcategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    slug: {
      type: String,
      slug: ["name", "category"],
      unique: true,
      slugPaddingSize: 4,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    description: {
      type: String,
      trim: true,
    },
    image: {
      type: String,
      trim: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    sortOrder: {
      type: Number,
      default: 0,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
    creator: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

subcategorySchema.index({ name: 1, category: 1 }, { unique: true });
subcategorySchema.index({ slug: 1 });
subcategorySchema.index({ category: 1 });

subcategorySchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

const Subcategory = mongoose.model("Subcategory", subcategorySchema);

module.exports = Subcategory;
