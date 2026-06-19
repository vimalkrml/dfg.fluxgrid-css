function CodeBlock({ code }) {
    return (
        <pre
            className="c-overflow-x-auto c-p-4 c-rounded-lg c-text-xs c-font-mono c-mt-4"
            style={{
                backgroundColor: 'var(--c-gray-950)',
                color: 'var(--c-gray-100)',
                lineHeight: '1.6',
            }}
        >
            <code>{code}</code>
        </pre>
    )
}

function Card({ title, children, code }) {
    return (
        <div className="c-rounded-xl c-border c-border-base c-overflow-hidden c-shadow-sm">
            <div
                className="c-px-4 c-py-3 c-border-b c-border-base"
                style={{ backgroundColor: 'color-mix(in srgb, var(--c-gray-100) 50%, transparent)' }}
            >
                <span className="c-text-xs c-font-semibold c-text-muted c-uppercase c-tracking-wide">
                    {title}
                </span>
            </div>
            <div className="c-p-6" style={{ backgroundColor: 'var(--c-bg)' }}>
                {children}
            </div>
            <CodeBlock code={code} />
        </div>
    )
}

export default function Components() {
    return (
        <section id="components" className="c-py-24 c-border-t c-border-base">
            <div className="c-container">
                <div className="c-text-center c-mb-16">
                    <h2 className="c-text-4xl c-font-black c-mb-4">
                        Ready-made <span className="c-text-primary-500">Components</span>
                    </h2>
                    <p className="c-text-lg c-text-muted c-max-w-prose c-mx-auto">
                        Production-ready buttons, inputs, badges, and form elements — no JavaScript required.
                    </p>
                </div>

                <div className="c-grid c-gap-6" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))' }}>

                    <Card
                        title="Buttons"
                        code={`<button class="c-btn c-btn-primary">Primary</button>
<button class="c-btn c-btn-secondary">Secondary</button>
<button class="c-btn c-btn-outline">Outline</button>
<button class="c-btn c-btn-ghost">Ghost</button>
<button class="c-btn c-btn-danger">Danger</button>`}
                    >
                        <div className="c-flex c-flex-wrap c-gap-3">
                            <button className="c-btn c-btn-primary">Primary</button>
                            <button className="c-btn c-btn-secondary">Secondary</button>
                            <button className="c-btn c-btn-outline">Outline</button>
                            <button className="c-btn c-btn-ghost">Ghost</button>
                            <button className="c-btn c-btn-danger">Danger</button>
                        </div>
                    </Card>

                    <Card
                        title="Button Sizes"
                        code={`<button class="c-btn c-btn-primary c-btn-xs">XSmall</button>
<button class="c-btn c-btn-primary c-btn-sm">Small</button>
<button class="c-btn c-btn-primary">Default</button>
<button class="c-btn c-btn-primary c-btn-lg">Large</button>
<button class="c-btn c-btn-primary c-btn-xl">XLarge</button>`}
                    >
                        <div className="c-flex c-flex-wrap c-items-center c-gap-3">
                            <button className="c-btn c-btn-primary c-btn-xs">XSmall</button>
                            <button className="c-btn c-btn-primary c-btn-sm">Small</button>
                            <button className="c-btn c-btn-primary">Default</button>
                            <button className="c-btn c-btn-primary c-btn-lg">Large</button>
                            <button className="c-btn c-btn-primary c-btn-xl">XLarge</button>
                        </div>
                    </Card>

                    <Card
                        title="Input"
                        code={`<div class="c-form-group">
  <label class="c-label c-label-required">Email</label>
  <input type="email" class="c-input" placeholder="you@example.com" />
  <span class="c-form-hint">We will never share your email.</span>
</div>`}
                    >
                        <div className="c-form-group">
                            <label className="c-label c-label-required">Email</label>
                            <input type="email" className="c-input" placeholder="you@example.com" />
                            <span className="c-form-hint">We will never share your email.</span>
                        </div>
                    </Card>

                    <Card
                        title="Input States"
                        code={`<input class="c-input" placeholder="Default" />
<input class="c-input c-input-error" placeholder="Error state" />
<input class="c-input c-input-success" placeholder="Success state" />`}
                    >
                        <div className="c-flex c-flex-col c-gap-3">
                            <input className="c-input" placeholder="Default" readOnly />
                            <input className="c-input c-input-error" placeholder="Error state" readOnly />
                            <input className="c-input c-input-success" placeholder="Success state" readOnly />
                        </div>
                    </Card>

                    <Card
                        title="Select"
                        code={`<select class="c-select">
  <option>Option One</option>
  <option>Option Two</option>
  <option>Option Three</option>
</select>`}
                    >
                        <select className="c-select">
                            <option>Option One</option>
                            <option>Option Two</option>
                            <option>Option Three</option>
                        </select>
                    </Card>

                    <Card
                        title="Textarea"
                        code={`<textarea
  class="c-textarea"
  rows="4"
  placeholder="Write your message..."
></textarea>`}
                    >
                        <textarea className="c-textarea" rows="4" placeholder="Write your message..." readOnly />
                    </Card>

                    <Card
                        title="Input Group"
                        code={`<div class="c-input-group">
  <span class="c-input-addon">https://</span>
  <input type="text" class="c-input" placeholder="yoursite.com" />
</div>`}
                    >
                        <div className="c-input-group">
                            <span className="c-input-addon">https://</span>
                            <input type="text" className="c-input" placeholder="yoursite.com" readOnly />
                        </div>
                    </Card>

                    <Card
                        title="Badges"
                        code={`<span class="c-px-3 c-py-1 c-rounded-full c-text-xs c-font-semibold c-bg-primary-100 c-text-primary-700">Primary</span>
<span class="c-px-3 c-py-1 c-rounded-full c-text-xs c-font-semibold c-bg-success-100 c-text-success-700">Success</span>
<span class="c-px-3 c-py-1 c-rounded-full c-text-xs c-font-semibold c-bg-error-100 c-text-error-700">Error</span>
<span class="c-px-3 c-py-1 c-rounded-full c-text-xs c-font-semibold c-bg-warning-100 c-text-warning-700">Warning</span>`}
                    >
                        <div className="c-flex c-flex-wrap c-gap-3">
                            <span className="c-px-3 c-py-1 c-rounded-full c-text-xs c-font-semibold c-bg-primary-100 c-text-primary-700">Primary</span>
                            <span className="c-px-3 c-py-1 c-rounded-full c-text-xs c-font-semibold c-bg-success-100 c-text-success-700">Success</span>
                            <span className="c-px-3 c-py-1 c-rounded-full c-text-xs c-font-semibold c-bg-error-100 c-text-error-700">Error</span>
                            <span className="c-px-3 c-py-1 c-rounded-full c-text-xs c-font-semibold c-bg-warning-100 c-text-warning-700">Warning</span>
                            <span className="c-px-3 c-py-1 c-rounded-full c-text-xs c-font-semibold c-bg-info-100 c-text-info-700">Info</span>
                        </div>
                    </Card>

                    <Card
                        title="Loading Button"
                        code={`<button class="c-btn c-btn-primary c-btn-loading">
  Saving...
</button>`}
                    >
                        <button className="c-btn c-btn-primary c-btn-loading">Saving...</button>
                    </Card>

                    <Card
                        title="Checkbox & Radio"
                        code={`<label class="c-flex c-items-center c-gap-2">
  <input type="checkbox" checked />
  <span class="c-text-sm">Accept terms</span>
</label>
<label class="c-flex c-items-center c-gap-2">
  <input type="radio" name="r" checked />
  <span class="c-text-sm">Option A</span>
</label>`}
                    >
                        <div className="c-flex c-flex-col c-gap-3">
                            <label className="c-flex c-items-center c-gap-2">
                                <input type="checkbox" defaultChecked />
                                <span className="c-text-sm">Accept terms and conditions</span>
                            </label>
                            <label className="c-flex c-items-center c-gap-2">
                                <input type="checkbox" />
                                <span className="c-text-sm">Subscribe to newsletter</span>
                            </label>
                            <label className="c-flex c-items-center c-gap-2">
                                <input type="radio" name="demo" defaultChecked />
                                <span className="c-text-sm">Option A</span>
                            </label>
                            <label className="c-flex c-items-center c-gap-2">
                                <input type="radio" name="demo" />
                                <span className="c-text-sm">Option B</span>
                            </label>
                        </div>
                    </Card>

                </div>
            </div>
        </section>
    )
}