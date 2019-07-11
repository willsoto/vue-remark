workflow "CI" {
  resolves = [
    "Lint",
    "Build",
    "Unit Tests",
    "E2E Tests",
  ]
  on = "pull_request"
}

workflow "CD" {
  resolves = [
    "Lint",
    "Build",
    "Unit Tests",
    "E2E Tests",
  ]
  on = "push"
}

action "Install" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  args = "install"
  runs = "yarn"
}

action "Lint" {
  uses  = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  needs = ["Install"]
  runs  = "yarn"
  args  = "lint"
}

action "Build" {
  uses  = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  needs = ["Install"]
  runs  = "yarn"
  args  = "build"
}

action "Unit Tests" {
  uses  = "bartlett705/npm-cy@6fa505d818d66409f91d1f42e3b15d50a0cc4886"
  needs = ["Install"]
  runs  = "yarn"
  args  = "test:unit --coverage"
}

action "E2E Tests" {
  uses  = "bartlett705/npm-cy@6fa505d818d66409f91d1f42e3b15d50a0cc4886"
  needs = ["Install"]
  runs  = "yarn"
  args  = "test:e2e --headless"
}
