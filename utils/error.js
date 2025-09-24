const handleError = (message, error = " ") => {
    console.log(`[DawnAddons] ${message} (${error})`)
}

module.exports = { handleError }
