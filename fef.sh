$headers = @{
		"Content-Type" = "application/json"
		"Authorization" = "Bearer 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"
}

$body = @{
		"messages" = @(
				@{
						"role" = "system"
						"content" = "You are a test assistant."
				},
				@{
						"role" = "user"
						"content" = "Testing. Just say hi and nothing else."
				}
		)
		"model" = "gpt-4o-mini"
} | ConvertTo-Json

Invoke-WebRequest -Uri "https://api.openai.com/v1/chat/completions" -Method Post -Headers $headers -Body $body