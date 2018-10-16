# == Schema Information
#
# Table name: channels
#
#  id          :bigint(8)        not null, primary key
#  title       :string           not null
#  description :text
#  private     :boolean          default(FALSE), not null
#  is_direct   :boolean          default(FALSE), not null
#  creator_id  :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Channel < ApplicationRecord
  validates :title, presence: true, length: { maximum: 40 }
  validates :description, length: {maximum: 100 }
  validates :private, inclusion: { in: [true, false]}
  validates :is_direct, inclusion: { in: [true, false]}

  has_many :subscriptions
  has_many :users, through: :subscriptions
  has_many :messages
end
