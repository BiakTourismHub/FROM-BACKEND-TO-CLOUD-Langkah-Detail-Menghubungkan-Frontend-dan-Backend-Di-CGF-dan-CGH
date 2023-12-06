func generateToken(userID string) (string, error) {
	now := time.Now()
	expiration := now.Add(24 * time.Hour) // Token berlaku selama 24 jam

	// Membuat token Paseto
	token, err := paseto.NewV2().Encrypt(secretKey, []byte(userID), now, expiration, nil)
	if err != nil {
		return "", err
	}

	return token, nil
}
