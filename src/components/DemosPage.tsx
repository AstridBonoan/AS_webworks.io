export function DemosPage() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen bg-white dark:bg-slate-950 transition-colors duration-200">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
          Demos
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-300 mb-10">
          Explore live examples of websites, SaaS experiences, and interactive product builds.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <article className="rounded-xl border border-slate-200 dark:border-slate-800 p-6 bg-white dark:bg-slate-900 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Business Website Demo</h2>
            <p className="text-slate-600 dark:text-slate-300">
              A conversion-focused marketing site with modern design and strong performance.
            </p>
          </article>

          <article className="rounded-xl border border-slate-200 dark:border-slate-800 p-6 bg-white dark:bg-slate-900 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">SaaS Dashboard Demo</h2>
            <p className="text-slate-600 dark:text-slate-300">
              A clean dashboard experience showing analytics, user roles, and workflow management.
            </p>
          </article>

          <article className="rounded-xl border border-slate-200 dark:border-slate-800 p-6 bg-white dark:bg-slate-900 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">E-commerce Flow Demo</h2>
            <p className="text-slate-600 dark:text-slate-300">
              A streamlined shopping and checkout journey designed to reduce friction and improve sales.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
