import { PropertyErrors } from "./property";

describe("PropertyErrors", () => {
  it("Should to return a error message 'Property already exists' status code equals to 400", () => {
    try {
      throw new PropertyErrors.PropertyAlreadyExistsError();
    } catch (error: any) {
      expect(error.message).toBe("Property already exists");
      expect(error.statusCode).toBe(400);
    }
  });

  it("Should to return a error message ''sale_cost' must be greater than 0' status code equals to 400", () => {
    try {
      throw new PropertyErrors.CannotCreatePropertyWithInvalidSaleCostError();
    } catch (error: any) {
      expect(error.message).toBe("'sale_cost' must be greater than 0");
      expect(error.statusCode).toBe(400);
    }
  });

  it("Should to return a error message ''rent_cost' must be greater than 0' status code equals to 400", () => {
    try {
      throw new PropertyErrors.CannotCreatePropertyWithInvalidRentCostError();
    } catch (error: any) {
      expect(error.message).toBe("'rent_cost' must be greater than 0");
      expect(error.statusCode).toBe(400);
    }
  });

  it("Should to return a error message 'Property not exists' status code equals to 404", () => {
    try {
      throw new PropertyErrors.PropertyNotExistsError();
    } catch (error: any) {
      expect(error.message).toBe("Property not exists");
      expect(error.statusCode).toBe(404);
    }
  });

  it("Should to return a error message 'Property already has owner' status code equals to 400", () => {
    try {
      throw new PropertyErrors.PropertyAlreadyHasOwnerError();
    } catch (error: any) {
      expect(error.message).toBe("Property already has owner");
      expect(error.statusCode).toBe(400);
    }
  });

  it("Should to return a error message 'Properties [some-property-id-1, some-property-id-2] not exists' status code equals to 404", () => {
    try {
      throw new PropertyErrors.PropertiesNotExistsError([
        "some-property-id-1",
        "some-property-id-2",
      ]);
    } catch (error: any) {
      expect(error.message).toBe(
        "Properties [some-property-id-1,some-property-id-2] not exists"
      );
      expect(error.statusCode).toBe(404);
    }
  });
});
