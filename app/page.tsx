import { Container } from "./shared";
import { PlanDetails, Plans } from "./widgets";

export default function Home() {
  return (
    <Container>
      <Plans />

      <PlanDetails />
    </Container>
  );
}
