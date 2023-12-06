func verifyToken(token string) (string, error) {
	var userID string

	// Memverifikasi token Paseto
	_, err := paseto.NewV2().Decrypt(token, secretKey, &userID, nil)
	if err != nil {
		return "", err
	}

	return userID, nil
}
