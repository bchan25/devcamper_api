// @description Get all bootcamps
// @route GET /api/v1/bootcamps
// @ access Public
exports.getBootcamps = (req, res, next) => {
  res.status(200).json({ success: true, msg: "Show all bootcamps" });
};

// @description Get single bootcamp
// @route GET /api/v1/bootcamps:id
// @ access Public
exports.getBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Show bootcamp ${req.params.id}` });
};

// @description Create new bootcamp
// @route POST /api/v1/bootcamps:id
// @ access Private
exports.createBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, msg: "Create new bootcamps" });
};

// @description Update new bootcamp
// @route PUT /api/v1/bootcamps:id
// @ access Private
exports.updateBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Update bootcamp ${req.params.id}` });
};

// @description Delete new bootcamp
// @route DELETE /api/v1/bootcamps:id
// @ access Private
exports.deleteBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Delete bootcamp ${req.params.id}` });
};
