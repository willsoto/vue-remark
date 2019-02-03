workflow "PR CI" {
  on = "pull_request"
  resolves = ["Build"]
}

action "Install" {
  uses = "actions/npm@3c8332795d5443adc712d30fa147db61fd520b5a"
  runs = "yarn"
  args = "install"
}

action "Build" {
  uses = "actions/npm@3c8332795d5443adc712d30fa147db61fd520b5a"
  needs = ["Install"]
  runs = "yarn"
  args = "build"
}
