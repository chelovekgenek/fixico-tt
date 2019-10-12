import React from "react";
import { shallow } from "enzyme";

import { Button, IconButton } from "components/commons/ui";
import reviews from "mocks/reviews.json";
import pagination from "mocks/pagination.json";

import { ReviewList } from "./ReviewList";

describe("ReviewForm", () => {
  const render = (
    props: Partial<React.ComponentProps<typeof ReviewList>> = {}
  ) =>
    shallow(
      <ReviewList
        reviews={reviews}
        pagination={pagination}
        deleteById={jest.fn() as any}
        setPage={jest.fn() as any}
        setLimit={jest.fn() as any}
        {...props}
      />
    );
  it("should render", () => {
    expect(render()).toMatchSnapshot();
  });
  it("shouldn't render anything if data is not provided", () => {
    expect(
      render({ reviews: [], pagination: { ...pagination, total: 0 } })
    ).toMatchSnapshot();
  });
  it("should call delete function", () => {
    const props = { deleteById: jest.fn() as any };
    const comp = render(props);
    comp
      .find(IconButton)
      .at(0)
      .simulate("click");
    expect(props.deleteById).toBeCalledWith(reviews[0].id);
  });
});
