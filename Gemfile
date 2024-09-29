source "https://rubygems.org"

gem "rails", "~> 7.2.1"
gem "sprockets-rails"

gem "puma", ">= 5.0"
gem "importmap-rails"
gem "turbo-rails"
gem "stimulus-rails"
gem "jbuilder"
gem "tzinfo-data", platforms: %i[ windows jruby ]
gem "bootsnap", require: false

group :development, :test do
  gem "debug", platforms: %i[ mri windows ], require: "debug/prelude"
  gem "sqlite3", ">= 1.4"
  gem "brakeman", require: false
  gem "rubocop-rails-omakase", require: false
end

group :development do
  gem "web-console"
end

group :production do
  gem "pg", "1.5.8"
end

group :test do
  gem "capybara"
  gem "selenium-webdriver"
end

gem "devise", "~> 4.9"
