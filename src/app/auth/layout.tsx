type Props = {
  children: React.ReactNode
}

export default function AuthLayout(props: Props) {
  return (
    <main className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-7 col-md-5 col-xl-4">
          <div className="my-5">
            <h1 className="text-center fw-bold">CRWN</h1>
            <p className="text-center text-muted">
              Unleash Your Style, Embrace Your Confidence!
            </p>
          </div>
          {props.children}
        </div>
      </div>
    </main>
  )
}
