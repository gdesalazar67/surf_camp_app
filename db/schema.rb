# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_08_11_200111) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "bookings", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "surfspot_id", null: false
    t.date "check_in", null: false
    t.date "check_out", null: false
    t.integer "num_guest", null: false
    t.integer "host_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id", "surfspot_id", "host_id"], name: "index_bookings_on_user_id_and_surfspot_id_and_host_id"
  end

  create_table "photos", force: :cascade do |t|
    t.string "surfspot_id", null: false
    t.string "img_url", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["surfspot_id"], name: "index_photos_on_surfspot_id"
  end

  create_table "reviews", force: :cascade do |t|
    t.integer "author_id", null: false
    t.integer "surfspot_id", null: false
    t.text "body", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["author_id", "surfspot_id"], name: "index_reviews_on_author_id_and_surfspot_id"
  end

  create_table "surfspots", force: :cascade do |t|
    t.integer "host_id", null: false
    t.string "title", null: false
    t.string "description", null: false
    t.integer "price", null: false
    t.decimal "lat", null: false
    t.decimal "long", null: false
    t.integer "max_guest", null: false
    t.boolean "campfire?", null: false
    t.boolean "pets?", null: false
    t.boolean "toilets?", null: false
    t.boolean "showers?", null: false
    t.boolean "wifi?", null: false
    t.boolean "water?", null: false
    t.boolean "tent?", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["host_id", "lat", "long", "price"], name: "index_surfspots_on_host_id_and_lat_and_long_and_price"
    t.index ["title"], name: "index_surfspots_on_title", unique: true
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name", null: false
    t.string "last_name", null: false
    t.string "email", null: false
    t.string "session_token", null: false
    t.string "password_digest", null: false
    t.integer "zip_code", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["password_digest"], name: "index_users_on_password_digest", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
  end

end
