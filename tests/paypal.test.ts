import { generateAccessToken, paypal } from "../lib/paypal";

//Test to generate access token from paypal

test("generatestoken from paypal", async () => {
  const tokenResponse = await generateAccessToken();
  console.log(tokenResponse);
  expect(typeof tokenResponse).toBe("string");
  expect(tokenResponse.length).toBeGreaterThan(0);
});

//Test to create paypay order
test("Create a paypal order", async () => {
  const token = await generateAccessToken();
  const price = 10.0;
  const orderResponse = await paypal.createOrder(price);
  console.log(orderResponse);

  expect(orderResponse).toHaveProperty("id");
  expect(orderResponse).toHaveProperty("status");
  expect(orderResponse.status).toBe("CREATED");
});

// //Test to capture paypay order with mock order
test("Simulate capturing payment from an order", async () => {
  const orderId = "100";

  const mockCapturePayment = jest
    .spyOn(paypal, "capturePayment")
    .mockResolvedValue({
      status: "COMPLETED",
    });

  const captureResponse = await paypal.capturePayment(orderId);
  expect(captureResponse).toHaveProperty("status", "COMPLETED");
  // expect(captureResponse.status).toBe("COMPLETED");

  //Cleaning
  mockCapturePayment.mockRestore();
});
