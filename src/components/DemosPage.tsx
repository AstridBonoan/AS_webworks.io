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
          <article className="rounded-xl border border-slate-200 dark:border-slate-800 p-6 bg-white dark:bg-slate-900 shadow-sm min-h-40" />
          <article className="rounded-xl border border-slate-200 dark:border-slate-800 p-6 bg-white dark:bg-slate-900 shadow-sm min-h-40" />
          <article className="rounded-xl border border-slate-200 dark:border-slate-800 p-6 bg-white dark:bg-slate-900 shadow-sm min-h-40" />
        </div>
      </div>
    </section>
  );
}
