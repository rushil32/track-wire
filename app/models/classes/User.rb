class User
  attr_accessor :first_name, :last_name, :email

  def initialize(attributes = {})
    @name = attributes[:name]
    @email = attributes[:email]    
  end

  def full_name
    @first_name + ' ' + @last_name
  end
end