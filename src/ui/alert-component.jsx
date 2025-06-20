import CodeContainer from "../containers/code-container";

export default function AlertComponent() {
  return (
    <section>
        <CodeContainer
        code="<h1>Complete Code</h1>"
        component={() => <h1>Complete Code</h1>}
        />
    </section>
  )
}
