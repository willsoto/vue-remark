workflow "PR CI" {
  on = "pull_request"
  resolves = ["Build"]
}

action "Build" {
  uses = "actions/npm@3c8332795d5443adc712d30fa147db61fd520b5a"
  runs = "yarn"
  args = "build"
}
