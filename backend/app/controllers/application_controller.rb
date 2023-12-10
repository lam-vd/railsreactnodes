class ApplicationController < ActionController::API
    before_action :authorized

    def encode_token(payload)
        JWT.encode(payload, 'yourSecret')
    end

    def auth_header
        request.headers['Authorization']
    end

    def decoded_token
        if auth_header
            token = auth_header.split(' ')[1]
            #header: { 'Authorization' : 'Bearer <token> '}
        begin
            JWT.decode(token, 'yourSecret', true, algorithm: 'HS256')
        rescue JWT::DecodeError
        end
    end
    
    
end