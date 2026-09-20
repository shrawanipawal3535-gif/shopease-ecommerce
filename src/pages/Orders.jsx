import { Link } from "react-router-dom";
import "./Orders.css";

function Orders() {
  const orders = JSON.parse(
    localStorage.getItem("shopease-orders") || "[]"
  );

  return (
    <div className="orders-page">

      <h1>My Orders 📦</h1>

      {orders.length === 0 ? (
        <div className="orders-empty">

          <h2>No Orders Yet</h2>

          <p>
            Your completed orders will appear here.
          </p>

          <Link to="/products">
            Start Shopping
          </Link>

        </div>
      ) : (
        <div className="orders-list">

          {orders.map((order) => (
            <div
              className="order-card"
              key={order.id}
            >

              <div className="order-header">

                <div>
                  <h2>
                    Order #{order.id}
                  </h2>

                  <p>
                    Date: {order.date}
                  </p>
                </div>

                <span className="order-status">
                  Delivered
                </span>

              </div>

              <div className="order-products">

                {order.items.map((item) => (
                  <div
                    className="order-product"
                    key={item.id}
                  >
                    <span>
                      {item.image}
                    </span>

                    <div>
                      <strong>
                        {item.name}
                      </strong>

                      <p>
                        Quantity: {item.quantity}
                      </p>
                    </div>

                    <strong>
                      ₹{(
                        item.price *
                        item.quantity
                      ).toLocaleString("en-IN")}
                    </strong>
                  </div>
                ))}

              </div>

              <div className="order-footer">

                <strong>
                  Total: ₹{order.total.toLocaleString("en-IN")}
                </strong>

              </div>

            </div>
          ))}

        </div>
      )}

    </div>
  );
}

export default Orders;