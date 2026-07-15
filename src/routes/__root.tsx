import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import { WhatsAppFab } from "../components/WhatsAppFab";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-8xl text-gold">404</h1>
        <h2 className="mt-4 font-display text-2xl">Página não encontrada</h2>
        <p className="mt-3 text-sm text-muted-foreground">
          A página que você procura não existe ou foi movida.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center border border-gold/60 bg-gold/5 px-6 py-3 text-xs tracking-[0.2em] uppercase text-gold hover:bg-gold hover:text-primary-foreground"
          >
            Voltar ao início
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-2xl">Algo deu errado</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Tente novamente ou volte ao início.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="border border-gold/60 bg-gold/5 px-6 py-3 text-xs tracking-[0.2em] uppercase text-gold hover:bg-gold hover:text-primary-foreground"
          >
            Tentar novamente
          </button>
          <a
            href="/"
            className="border border-border px-6 py-3 text-xs tracking-[0.2em] uppercase text-muted-foreground hover:border-gold hover:text-gold"
          >
            Início
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Tours Roma Italia — Transfers Privados e Tours de Luxo na Itália" },
      {
        name: "description",
        content:
          "Transfers privados com motorista particular e tours exclusivos por Roma, Florença, Amalfi, Pompeia e toda a Itália. Mais de 10 anos de experiência.",
      },
      { name: "author", content: "Tours Roma Italia" },
      { property: "og:title", content: "Tours Roma Italia — Transfers Privados e Tours de Luxo na Itália" },
      {
        property: "og:description",
        content:
          "Transfers privados com motorista particular e tours exclusivos por Roma, Florença, Amalfi, Pompeia e toda a Itália. Mais de 10 anos de experiência.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Tours Roma Italia — Transfers Privados e Tours de Luxo na Itália" },
      { name: "twitter:description", content: "Transfers privados com motorista particular e tours exclusivos por Roma, Florença, Amalfi, Pompeia e toda a Itália. Mais de 10 anos de experiência." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/afe931f6-7db6-4519-8526-e4fc60b966f4/id-preview-66b0c419--09e29ac9-a31a-45ee-bab6-7ab92b7b982f.lovable.app-1784070511428.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/afe931f6-7db6-4519-8526-e4fc60b966f4/id-preview-66b0c419--09e29ac9-a31a-45ee-bab6-7ab92b7b982f.lovable.app-1784070511428.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400&family=Inter:wght@300;400;500;600&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col">
        <SiteHeader />
        <main className="flex-1">
          <Outlet />
        </main>
        <SiteFooter />
        <WhatsAppFab />
      </div>
    </QueryClientProvider>
  );
}
