export default (req, res, next) => {
    req.user = { user_id: 1 }; // Mock user with ID 1
    next();
};