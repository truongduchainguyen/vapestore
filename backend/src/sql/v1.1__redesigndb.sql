DROP TABLE product;
CREATE TABLE
IF NOT EXISTS product
(
    product_id BIGSERIAL PRIMARY KEY,
    is_deleted BOOLEAN DEFAULT false,
    created_at TIMESTAMP NOT NULL,
    updated_at TIMESTAMP NOT NULL,
    name VARCHAR(50) NOT NULL,
    price DECIMAL NOT NULL DEFAULT 0,
    comment JSON,
    type VARCHAR(20) NOT NULL,
    description VARCHAR(200),
    nicotine DECIMAL,
    volume DECIMAL,
    quantity INT NOT NULL DEFAULT 0
);

CREATE TABLE IF NOT EXISTS user(
    user_id BIGSERIAL PRIMARY KEY,
    is_deleted BOOLEAN DEFAULT false,
    created_at TIMESTAMP NOT NULL,
    updated_at TIMESTAMP NOT NULL,
    name VARCHAR(50),
    phone VARCHAR(17),
    role VARCHAR(10),
    address VARCHAR(100),
    order_id JSON
);

CREATE TABLE IF NOT EXISTS order(
    order_id BIGSERIAL PRIMARY KEY,
    is_deleted BOOLEAN DEFAULT false,
    created_at TIMESTAMP NOT NULL,
    updated_at TIMESTAMP NOT NULL,
    products JSON,
    status VARCHAR(20),
    user_id BIGSERIAL,
    total DECIMAL NOT NULL
);

ALTER TABLE order ADD CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES user(user_id);
