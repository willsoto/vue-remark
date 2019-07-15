workflow "CI" {
  resolves = [
    "Install",
    "Build",
  ]
  on = "pull_request"
}

workflow "CD" {
  resolves = [
    "Install",
    "Lint",
  ]
  on = "push"
}

action "Install" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  args = "install"
  runs = "yarn"
}

action "Build" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  needs = ["Install"]
  runs = "yarn"
  args = "build"
  env = {
    NODE_ENV = "production"
  }
}

action "E2E Tests" {
  uses = "bartlett705/npm-cy@6fa505d818d66409f91d1f42e3b15d50a0cc4886"
  runs = "yarn"
  args = "test:e2e --headless"
  needs = ["Build"]
}

action "Unit Tests" {
  uses = "bartlett705/npm-cy@6fa505d818d66409f91d1f42e3b15d50a0cc4886"
  runs = "yarn"
  args = "test:unit --coverage"
  needs = ["E2E Tests"]
}

action "Lint" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  needs = ["Unit Tests"]
  runs = "yarn"
  args = "lint"
}
