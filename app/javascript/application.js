// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "@rails/ujs" // This is enough to start UJS functionality
import "controllers"

// Ensure Rails UJS starts
import Rails from "@rails/ujs";
Rails.start();