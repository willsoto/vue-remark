workflow "PR CI" {
  on = "pull_request"
  resolves = ["E2E Tests"]
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

action "Unit Tests" {
  uses = "actions/npm@3c8332795d5443adc712d30fa147db61fd520b5a"
  needs = ["Build"]
  runs = "yarn"
  args = "test:unit --coverage"
}

action "E2E Tests" {
  uses = "actions/npm@3c8332795d5443adc712d30fa147db61fd520b5a"
  needs = ["Unit Tests"]
  runs = "yarn"
  args = "test:e2e --headless"
}
