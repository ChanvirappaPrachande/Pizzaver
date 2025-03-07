import { useFetcher } from "react-router-dom";
import Button from "../../ui/Button";
import { updateOrder } from "../../services/apiRestaurant";
function UpdateOrder({ order }) {
  const fetcher = useFetcher();
  //this one not navigate , revalidate the page
  //revalidation means the reaceter knows that data has changed , new data is fetched and re rendred
  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button type="primary">Make Priority</Button>
    </fetcher.Form>
  );
}

export default UpdateOrder;

export async function action({ request, params }) {
  const data = { priority: true };
  await updateOrder(params.orderId, data);
  return null;
}
