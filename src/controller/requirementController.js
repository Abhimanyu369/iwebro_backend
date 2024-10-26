const Requirement = require('../models/Requirement');

// Create a new requirement
exports.createRequirement = async (req, res) => {
  try {
    const { title, description, selectedProfiles } = req.body;
    const newRequirement = new Requirement({
      client: req.user.userId, // Assuming the client ID is obtained from JWT
      title,
      description,
      selectedProfiles,
    });

    await newRequirement.save();
    res.status(201).json(newRequirement);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all requirements for a client
exports.getClientRequirements = async (req, res) => {
  try {
    const requirements = await Requirement.find({ client: req.user.userId }).populate('selectedProfiles');
    res.json(requirements);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a single requirement by ID
exports.getRequirementById = async (req, res) => {
  try {
    const requirement = await Requirement.findById(req.params.id).populate('selectedProfiles');
    if (!requirement) {
      return res.status(404).json({ message: 'Requirement not found' });
    }
    res.json(requirement);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a requirement (e.g., status or selected profiles)
exports.updateRequirement = async (req, res) => {
  try {
    const updatedRequirement = await Requirement.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    ).populate('selectedProfiles');

    if (!updatedRequirement) {
      return res.status(404).json({ message: 'Requirement not found' });
    }

    res.json(updatedRequirement);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a requirement
exports.deleteRequirement = async (req, res) => {
  try {
    await Requirement.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
