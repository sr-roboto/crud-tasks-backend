function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-stone-900 to-stone-950 font-mono">
      <div className="card bg-base-100 max-w-sm shrink-0 shadow-xl border-primary border-2">
        <form className="card-body gap-4">
          <div className="form-control ">
            <input
              type="text"
              placeholder="name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control ">
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <input
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Registrarse</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
