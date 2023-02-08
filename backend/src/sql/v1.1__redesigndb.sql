DROP TABLE product;
CREATE TABLE
IF NOT EXISTS product
(
    id BIGSERIAL PRIMARY KEY,
    is_deleted BOOLEAN DEFAULT false,
    created_at TIMESTAMP NOT NULL,
    updated_at TIMESTAMP NOT NULL,
    name VARCHAR(50) NOT NULL,
    price DECIMAL NOT NULL DEFAULT 0,
    comment JSON,
    type VARCHAR(20) NOT NULL,
    description VARCHAR(200),
    nicotine NUMBER,
    volume NUMBER,
    quantity NUMBER NOT NULL DEFAULT 0
)

CREATE TABLE IF NOT EXISTS user(
    id BIGSERIAL PRIMARY KEY,
    is_deleted BOOLEAN DEFAULT false,
    created_at TIMESTAMP NOT NULL,
    updated_at TIMESTAMP NOT NULL,
    name VARCHAR(50),
    phone VARCHAR(17),
    role VARCHAR(10),
    address VARCHAR(100),
    order_id BIGSERIAL
)

CREATE TABLE IF NOT EXISTS order(
    id BIGSERIAL PRIMARY KEY,
    is_deleted BOOLEAN DEFAULT false,
    created_at TIMESTAMP NOT NULL,
    updated_at TIMESTAMP NOT NULL,
    products JSON,
    status VARCHAR(20),
    customer_id BIGSERIAL
)