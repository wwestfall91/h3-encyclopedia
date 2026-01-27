$b = (git rev-parse --abbrev-ref HEAD).Trim()
Write-Output "Branch: $b"
git add .
git commit -m 'Add Hostinger deployment workflow and docs' -q
if ($LASTEXITCODE -ne 0) { Write-Output 'Nothing to commit or commit failed.' } else { Write-Output 'Committed.' }
git push origin $b
if ($LASTEXITCODE -ne 0) { Write-Output 'Push failed; trying to set upstream...'; git push --set-upstream origin $b }
mkdir -Force .github | Out-Null
ssh-keygen -t rsa -b 4096 -f .github/hostinger_deploy_key -N "" -C 'github-actions@h3-encyclopedia' | Out-Null
Write-Output '---PUBLIC KEY---'
Get-Content .github/hostinger_deploy_key.pub
Write-Output '---END PUBLIC KEY---'
Write-Output '---PRIVATE KEY (for GitHub secret HOSTINGER_SSH_KEY)---'
Get-Content .github/hostinger_deploy_key
Write-Output '---END PRIVATE KEY---'
