import {
  ArrowLeft,
  Sparkles,
  Zap,
  ShieldCheck,
  BarChart3,
  Layers,
  Users,
  Globe,
  Check,
  Play,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

const features = [
  {
    icon: Zap,
    title: 'سرعت بالا',
    description:
      'با معماری مدرن و بهینه، اپلیکیشن شما در کسری از ثانیه بارگذاری می‌شود.',
  },
  {
    icon: ShieldCheck,
    title: 'امنیت کامل',
    description:
      'محافظت از داده‌ها با لایه‌های امنیتی پیشرفته و رمزنگاری سرتاسری.',
  },
  {
    icon: BarChart3,
    title: 'تحلیل هوشمند',
    description:
      'داشبورد قدرتمند برای پایش عملکرد و تصمیم‌گیری مبتنی بر داده.',
  },
  {
    icon: Layers,
    title: 'مقیاس‌پذیری',
    description:
      'از یک کاربر تا میلیون‌ها کاربر، زیرساخت همراه شما رشد می‌کند.',
  },
  {
    icon: Users,
    title: 'همکاری تیمی',
    description:
      'مدیریت نقش‌ها و دسترسی‌ها برای تیم‌های کوچک و بزرگ.',
  },
  {
    icon: Globe,
    title: 'پشتیبانی جهانی',
    description:
      'بستر توزیع‌شده در سراسر جهان برای دسترسی بدون مرز.',
  },
];

const stats = [
  { value: '۹۹.۹٪', label: 'زمان فعالیت' },
  { value: '۵۰ms', label: 'میانگین پاسخ' },
  { value: '۲۴/۷', label: 'پشتیبانی' },
  { value: '۱۸+', label: 'زبان پشتیبانی' },
];

const steps = [
  {
    number: '۰۱',
    title: 'ثبت‌نام کنید',
    description: 'در کمتر از یک دقیقه حساب کاربری خود را ایجاد کنید.',
  },
  {
    number: '۰۲',
    title: 'پروژه بسازید',
    description: 'با چند کلیک، اپلیکیشن خود را راه‌اندازی کنید.',
  },
  {
    number: '۰۳',
    title: 'انتشار دهید',
    description: 'اپلیکیشن شما آماده‌ی عرضه به جهان است.',
  },
];

const plans = [
  {
    name: 'رایگان',
    price: '۰',
    period: 'تومان / ماه',
    description: 'برای شروع و آزمایش',
    features: ['۱ پروژه', '۱ گیگابایت فضای ذخیره‌سازی', '۱۰ هزار درخواست', 'پشتیبانی انجمن'],
    cta: 'شروع کنید',
    highlighted: false,
  },
  {
    name: 'حرفه‌ای',
    price: '۲۹۰,۰۰۰',
    period: 'تومان / ماه',
    description: 'برای تیم‌های در حال رشد',
    features: [
      'پروژه‌های نامحدود',
      '۱۰۰ گیگابایت فضای ذخیره‌سازی',
      '۱ میلیون درخواست',
      'پشتیبانی اولویت‌دار',
      'تحلیل پیشرفته',
    ],
    cta: 'انتخاب برنامه',
    highlighted: true,
  },
  {
    name: 'سازمانی',
    price: 'سفارشی',
    period: 'تماس بگیرید',
    description: 'برای سازمان‌های بزرگ',
    features: ['تمام امکانات حرفه‌ای', 'فضای نامحدود', 'SLA تضمین‌شده', 'مدیر اختصاصی', 'میزبانی اختصاصی'],
    cta: 'تماس با فروش',
    highlighted: false,
  },
];

const faqs = [
  {
    question: 'آیا می‌توانم برنامه رایگان را برای همیشه استفاده کنم؟',
    answer: 'بله، برنامه رایگان برای همیشه فعال است و هیچ کارت اعتباری نیاز ندارد.',
  },
  {
    question: 'آیا امکان ارتقا یا کاهش برنامه وجود دارد؟',
    answer: 'بله، شما می‌توانید در هر زمان برنامه خود را تغییر دهید؛ تغییرات فوراً اعمال می‌شود.',
  },
  {
    question: 'آیا داده‌های من امن هستند؟',
    answer: 'بله، تمام داده‌ها با رمزنگاری سرتاسری محافظت می‌شوند و ما هرگز به داده‌های شما دسترسی نداریم.',
  },
  {
    question: 'چه نوع پشتیبانی دریافت می‌کنم؟',
    answer: 'برنامه رایگان شامل پشتیبانی انجمن است و برنامه‌های پولی شامل پشتیبانی اولویت‌دار با پاسخگویی سریع.',
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-lg">
        <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
              <Sparkles className="h-5 w-5" />
            </div>
            <span className="text-lg font-bold tracking-tight">آریا</span>
          </div>
          <nav className="hidden items-center gap-8 md:flex">
            <a href="#features" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              امکانات
            </a>
            <a href="#how" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              نحوه کار
            </a>
            <a href="#pricing" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              قیمت‌گذاری
            </a>
            <a href="#faq" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              سوالات
            </a>
          </nav>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" className="hidden sm:flex">
              ورود
            </Button>
            <Button size="sm">ثبت‌نام</Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-mesh">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
        <div className="container relative mx-auto max-w-6xl px-4 py-20 md:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="secondary" className="mb-6 animate-fade-in border-primary/20 bg-primary/10 text-primary">
              <Sparkles className="ml-1 h-3.5 w-3.5" />
              نسخه جدید منتشر شد
            </Badge>
            <h1 className="animate-fade-in-up text-4xl font-extrabold leading-tight tracking-tight text-foreground md:text-6xl lg:text-7xl">
              اپلیکیشن وب خود را
              <br />
              <span className="bg-gradient-to-l from-primary to-info bg-clip-text text-transparent">
                سریع و زیبا
              </span>{' '}
              بسازید
            </h1>
            <p className="mx-auto mt-6 max-w-2xl animate-fade-in-up text-lg leading-relaxed text-muted-foreground md:text-xl" style={{ animationDelay: '0.1s' }}>
              پلتفرم آریا به شما امکان می‌دهد اپلیکیشن‌های وب قدرتمند و حرفه‌ای را بدون نیاز به دانش فنی عمیق بسازید، مدیریت و منتشر کنید.
            </p>
            <div className="mt-10 flex animate-fade-in-up flex-col items-center justify-center gap-4 sm:flex-row" style={{ animationDelay: '0.2s' }}>
              <Button size="lg" className="group h-12 px-8 text-base animate-pulse-glow">
                شروع رایگان
                <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="h-12 px-8 text-base">
                <Play className="ml-2 h-4 w-4" />
                تماشای دمو
              </Button>
            </div>
            <div className="mt-8 flex animate-fade-in items-center justify-center gap-6 text-sm text-muted-foreground" style={{ animationDelay: '0.3s' }}>
              <span className="flex items-center gap-1.5">
                <Check className="h-4 w-4 text-success" />
                بدون کارت اعتباری
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="h-4 w-4 text-success" />
                راه‌اندازی در ۲ دقیقه
              </span>
              <span className="hidden items-center gap-1.5 sm:flex">
                <Check className="h-4 w-4 text-success" />
                لغو در هر زمان
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border/40 bg-secondary/30">
        <div className="container mx-auto max-w-6xl px-4 py-12">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, i) => (
              <div key={stat.label} className="animate-fade-in-up text-center" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="text-3xl font-extrabold text-foreground md:text-4xl">{stat.value}</div>
                <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 md:py-28">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="outline" className="mb-4 text-primary">
              امکانات
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              همه چیز برای موفقیت شما
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              مجموعه‌ای کامل از ابزارها که نیازهای هر تیمی را پوشش می‌دهد.
            </p>
          </div>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, i) => (
              <Card
                key={feature.title}
                className="animate-fade-in-up group relative overflow-hidden border-border/60 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="border-y border-border/40 bg-secondary/30 py-20 md:py-28">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="outline" className="mb-4 text-primary">
              نحوه کار
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              در سه قدم ساده شروع کنید
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              از ایده تا انتشار، تنها در چند دقیقه.
            </p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className="animate-fade-in-up relative text-center"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/10 text-3xl font-extrabold text-primary">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="mt-2 text-muted-foreground">{step.description}</p>
                {i < steps.length - 1 && (
                  <div className="absolute left-0 top-10 hidden h-px w-full -translate-y-1/2 md:block">
                    <div className="mx-auto h-px w-2/3 bg-gradient-to-l from-border to-transparent" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 md:py-28">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="outline" className="mb-4 text-primary">
              قیمت‌گذاری
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              برنامه‌ای مناسب هر بودجه
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              بدون هزینه پنهان. هر زمان خواستید تغییر دهید.
            </p>
          </div>
          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            {plans.map((plan, i) => (
              <Card
                key={plan.name}
                className={`animate-fade-in-up relative flex flex-col transition-all duration-300 hover:-translate-y-1 ${
                  plan.highlighted
                    ? 'border-primary shadow-lg ring-2 ring-primary/20'
                    : 'border-border/60 hover:border-primary/40 hover:shadow-md'
                }`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {plan.highlighted && (
                  <div className="absolute -top-3 right-1/2 translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground">محبوب‌ترین</Badge>
                  </div>
                )}
                <CardContent className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-bold">{plan.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{plan.description}</p>
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold">{plan.price}</span>
                    <span className="text-sm text-muted-foreground">{plan.period}</span>
                  </div>
                  <Separator className="my-6" />
                  <ul className="flex-1 space-y-3">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm">
                        <Check className="h-4 w-4 flex-shrink-0 text-success" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className="mt-6 w-full"
                    variant={plan.highlighted ? 'default' : 'outline'}
                  >
                    {plan.cta}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="border-t border-border/40 bg-secondary/30 py-20 md:py-28">
        <div className="container mx-auto max-w-3xl px-4">
          <div className="text-center">
            <Badge variant="outline" className="mb-4 text-primary">
              سوالات متداول
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              سوالی دارید؟
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              پاسخ به پرتکرارترین پرسش‌های کاربران.
            </p>
          </div>
          <div className="mt-12 space-y-4">
            {faqs.map((faq, i) => (
              <Card
                key={faq.question}
                className="animate-fade-in-up overflow-hidden border-border/60"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <CardContent className="p-6">
                  <h3 className="text-base font-semibold">{faq.question}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-info p-10 text-center md:p-16">
            <div className="absolute inset-0 bg-grid opacity-20" />
            <div className="relative">
              <h2 className="text-3xl font-bold tracking-tight text-primary-foreground md:text-4xl">
                امروز شروع کنید
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg text-primary-foreground/90">
                به هزاران کاربر بپیوندید که با آریا اپلیکیشن‌های خود را سریع‌تر و زیباتر می‌سازند.
              </p>
              <Button
                size="lg"
                variant="secondary"
                className="mt-8 h-12 bg-background px-8 text-base text-foreground hover:bg-background/90"
              >
                ساخت اکانت رایگان
                <ArrowLeft className="mr-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 bg-secondary/30">
        <div className="container mx-auto max-w-6xl px-4 py-12">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="md:col-span-1">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <Sparkles className="h-4 w-4" />
                </div>
                <span className="text-base font-bold">آریا</span>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                پلتفرم نوین برای ساخت و مدیریت اپلیکیشن‌های وب.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold">محصول</h4>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li><a href="#features" className="transition-colors hover:text-foreground">امکانات</a></li>
                <li><a href="#pricing" className="transition-colors hover:text-foreground">قیمت‌گذاری</a></li>
                <li><a href="#how" className="transition-colors hover:text-foreground">نحوه کار</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold">شرکت</h4>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="transition-colors hover:text-foreground">درباره ما</a></li>
                <li><a href="#" className="transition-colors hover:text-foreground">بلاگ</a></li>
                <li><a href="#" className="transition-colors hover:text-foreground">تماس</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold">قوانین</h4>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="transition-colors hover:text-foreground">حریم خصوصی</a></li>
                <li><a href="#" className="transition-colors hover:text-foreground">شرایط استفاده</a></li>
              </ul>
            </div>
          </div>
          <Separator className="my-8" />
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground md:flex-row">
            <p>© ۱۴۰۵ آریا. تمام حقوق محفوظ است.</p>
            <p>ساخته‌شده با عشق در ایران</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
