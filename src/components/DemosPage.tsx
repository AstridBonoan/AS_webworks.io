export function DemosPage() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen bg-white dark:bg-slate-950 transition-colors duration-200">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
          Demos
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-300 mb-10">
          Explore live examples of websites, SaaS experiences, and interactive product builds.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <article className="rounded-md border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm overflow-hidden">
            <img src="/bonoan_labs.io/demo-images/clothing.png" alt="AS Clothing Ecommerce screenshot" className="block w-full h-auto" />
            <div className="p-5">
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Project 1</h2>
              <a
                href="https://astridbonoan.github.io/AS-ClothingEcommerce.io/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-lg bg-slate-900 dark:bg-white px-4 py-2 text-sm font-semibold text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors"
              >
                Open Demo
              </a>
            </div>
          </article>
          <article className="rounded-md border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm overflow-hidden">
            <img src="/bonoan_labs.io/demo-images/autoshop.png" alt="AS Auto Shop screenshot" className="block w-full h-auto" />
            <div className="p-5">
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Project 2</h2>
              <a
                href="https://astridbonoan.github.io/AS-AutoShop.io/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-lg bg-slate-900 dark:bg-white px-4 py-2 text-sm font-semibold text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors"
              >
                Open Demo
              </a>
            </div>
          </article>
          <article className="rounded-md border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm overflow-hidden">
            <img src="/bonoan_labs.io/demo-images/restaurant.png" alt="A&S Filipino Kitchen screenshot" className="block w-full h-auto" />
            <div className="p-5">
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Project 3</h2>
              <a
                href="https://astridbonoan.github.io/AS-FilipinoRestaurant.io/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-lg bg-slate-900 dark:bg-white px-4 py-2 text-sm font-semibold text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors"
              >
                Open Demo
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
