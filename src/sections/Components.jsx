import { useState } from 'react'

function CodeBlock({ code }) {
    return (
        <pre
            style={{
                margin: 0,
                padding: '16px',
                backgroundColor: 'var(--c-gray-950)',
                color: 'var(--c-gray-100)',
                fontSize: '12px',
                fontFamily: 'monospace',
                lineHeight: '1.7',
                overflowX: 'auto',
                borderTop: '1px solid var(--c-border)',
            }}
        >
            <code>{code}</code>
        </pre>
    )
}

function Row({ title, preview, code }) {
    const [showCode, setShowCode] = useState(false)
    return (
        <div style={{ borderBottom: '1px solid var(--c-border)' }}>
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: '180px 1fr',
                    minHeight: '64px',
                }}
            >
                <div
                    style={{
                        padding: '16px',
                        borderRight: '1px solid var(--c-border)',
                        backgroundColor: 'color-mix(in srgb, var(--c-gray-100) 40%, transparent)',
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--c-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                        {title}
                    </span>
                </div>
                <div
                    style={{
                        padding: '16px 20px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '16px',
                        flexWrap: 'wrap',
                        backgroundColor: 'var(--c-bg)',
                    }}
                >
                    <div style={{ flex: 1, minWidth: 0 }}>{preview}</div>
                    <button
                        onClick={() => setShowCode((v) => !v)}
                        style={{
                            padding: '4px 10px',
                            borderRadius: '6px',
                            border: '1px solid var(--c-border)',
                            backgroundColor: 'transparent',
                            color: 'var(--c-muted)',
                            fontSize: '11px',
                            cursor: 'pointer',
                            flexShrink: 0,
                            fontFamily: 'monospace',
                        }}
                    >
                        {showCode ? 'Hide' : '</>'}
                    </button>
                </div>
            </div>
            {showCode && <CodeBlock code={code} />}
        </div>
    )
}

function Table({ title, rows }) {
    return (
        <div
            style={{
                borderRadius: '12px',
                border: '1px solid var(--c-border)',
                overflow: 'hidden',
                marginBottom: '24px',
            }}
        >
            <div
                style={{
                    padding: '12px 20px',
                    borderBottom: '1px solid var(--c-border)',
                    backgroundColor: 'color-mix(in srgb, var(--c-primary-500) 6%, var(--c-bg))',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                }}
            >
                <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--c-fg)' }}>{title}</span>
            </div>
            {rows.map((row) => (
                <Row key={row.title} {...row} />
            ))}
        </div>
    )
}

function CustomSelect({ id, placeholder = 'Choose an option', options = [], defaultActive = null, error = false, success = false, size = '' }) {
    const [value, setValue] = useState(defaultActive || placeholder)
    const wrapClass = `c-select-wrap${size ? ` c-select-wrap-${size}` : ''}${error ? ' c-select-wrap-error' : ''}${success ? ' c-select-wrap-success' : ''}`
    return (
        <div className={wrapClass}>
            <input type="checkbox" className="c-select-toggle" id={id} />
            <label className="c-select-trigger" htmlFor={id}>
                <span className="c-select-value">{value}</span>
                <svg className="c-select-arrow" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m6 9 6 6 6-6" />
                </svg>
            </label>
            <ul className="c-select-dropdown">
                {options.map((opt) => (
                    <li
                        key={opt}
                        className={`c-select-item${value === opt ? ' c-select-item-active' : ''}`}
                        onClick={() => { setValue(opt); document.getElementById(id).checked = false }}
                    >
                        {opt}
                    </li>
                ))}
            </ul>
        </div>
    )
}

const tabs = ['Buttons', 'Inputs', 'Select', 'Badges', 'Form Groups']

const tables = {
    Buttons: [
        {
            title: 'Button Variants',
            rows: [
                {
                    title: 'Primary',
                    preview: <button className="c-btn c-btn-primary">Primary</button>,
                    code: `<button class="c-btn c-btn-primary">Primary</button>`,
                },
                {
                    title: 'Secondary',
                    preview: <button className="c-btn c-btn-secondary">Secondary</button>,
                    code: `<button class="c-btn c-btn-secondary">Secondary</button>`,
                },
                {
                    title: 'Outline',
                    preview: <button className="c-btn c-btn-outline">Outline</button>,
                    code: `<button class="c-btn c-btn-outline">Outline</button>`,
                },
                {
                    title: 'Ghost',
                    preview: <button className="c-btn c-btn-ghost">Ghost</button>,
                    code: `<button class="c-btn c-btn-ghost">Ghost</button>`,
                },
                {
                    title: 'Danger',
                    preview: <button className="c-btn c-btn-danger">Danger</button>,
                    code: `<button class="c-btn c-btn-danger">Danger</button>`,
                },
                {
                    title: 'Success',
                    preview: <button className="c-btn c-btn-success">Success</button>,
                    code: `<button class="c-btn c-btn-success">Success</button>`,
                },
            ],
        },
        {
            title: 'Button Sizes',
            rows: [
                {
                    title: 'XSmall',
                    preview: <button className="c-btn c-btn-primary c-btn-xs">XSmall</button>,
                    code: `<button class="c-btn c-btn-primary c-btn-xs">XSmall</button>`,
                },
                {
                    title: 'Small',
                    preview: <button className="c-btn c-btn-primary c-btn-sm">Small</button>,
                    code: `<button class="c-btn c-btn-primary c-btn-sm">Small</button>`,
                },
                {
                    title: 'Default',
                    preview: <button className="c-btn c-btn-primary">Default</button>,
                    code: `<button class="c-btn c-btn-primary">Default</button>`,
                },
                {
                    title: 'Large',
                    preview: <button className="c-btn c-btn-primary c-btn-lg">Large</button>,
                    code: `<button class="c-btn c-btn-primary c-btn-lg">Large</button>`,
                },
                {
                    title: 'XLarge',
                    preview: <button className="c-btn c-btn-primary c-btn-xl">XLarge</button>,
                    code: `<button class="c-btn c-btn-primary c-btn-xl">XLarge</button>`,
                },
            ],
        },
        {
            title: 'Button States',
            rows: [
                {
                    title: 'Loading',
                    preview: <button className="c-btn c-btn-primary c-btn-loading">Saving...</button>,
                    code: `<button class="c-btn c-btn-primary c-btn-loading">Saving...</button>`,
                },
                {
                    title: 'Full Width',
                    preview: <button className="c-btn c-btn-primary c-btn-full">Full Width</button>,
                    code: `<button class="c-btn c-btn-primary c-btn-full">Full Width</button>`,
                },
                {
                    title: 'Disabled',
                    preview: <button className="c-btn c-btn-primary" disabled>Disabled</button>,
                    code: `<button class="c-btn c-btn-primary" disabled>Disabled</button>`,
                },
            ],
        },
    ],
    Inputs: [
        {
            title: 'Input',
            rows: [
                {
                    title: 'Default',
                    preview: <input className="c-input" placeholder="Enter text..." style={{ maxWidth: '300px' }} />,
                    code: `<input class="c-input" placeholder="Enter text..." />`,
                },
                {
                    title: 'Error State',
                    preview: <input className="c-input c-input-error" placeholder="Error state" style={{ maxWidth: '300px' }} />,
                    code: `<input class="c-input c-input-error" placeholder="Error state" />`,
                },
                {
                    title: 'Success State',
                    preview: <input className="c-input c-input-success" placeholder="Success state" style={{ maxWidth: '300px' }} />,
                    code: `<input class="c-input c-input-success" placeholder="Success state" />`,
                },
                {
                    title: 'Small',
                    preview: <input className="c-input c-input-sm" placeholder="Small input" style={{ maxWidth: '300px' }} />,
                    code: `<input class="c-input c-input-sm" placeholder="Small input" />`,
                },
                {
                    title: 'Large',
                    preview: <input className="c-input c-input-lg" placeholder="Large input" style={{ maxWidth: '300px' }} />,
                    code: `<input class="c-input c-input-lg" placeholder="Large input" />`,
                },
                {
                    title: 'Input Group',
                    preview: (
                        <div className="c-input-group" style={{ maxWidth: '300px' }}>
                            <span className="c-input-addon">https://</span>
                            <input type="text" className="c-input" placeholder="yoursite.com" />
                        </div>
                    ),
                    code: `<div class="c-input-group">
  <span class="c-input-addon">https://</span>
  <input type="text" class="c-input" placeholder="yoursite.com" />
</div>`,
                },
            ],
        },
        {
            title: 'Checkbox & Radio',
            rows: [
                {
                    title: 'Checkbox',
                    preview: (
                        <label className="c-flex c-items-center c-gap-2">
                            <input type="checkbox" defaultChecked />
                            <span className="c-text-sm">Accept terms</span>
                        </label>
                    ),
                    code: `<label class="c-flex c-items-center c-gap-2">
  <input type="checkbox" checked />
  <span class="c-text-sm">Accept terms</span>
</label>`,
                },
                {
                    title: 'Unchecked',
                    preview: (
                        <label className="c-flex c-items-center c-gap-2">
                            <input type="checkbox" />
                            <span className="c-text-sm">Subscribe to newsletter</span>
                        </label>
                    ),
                    code: `<label class="c-flex c-items-center c-gap-2">
  <input type="checkbox" />
  <span class="c-text-sm">Subscribe to newsletter</span>
</label>`,
                },
                {
                    title: 'Radio',
                    preview: (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            <label className="c-flex c-items-center c-gap-2">
                                <input type="radio" name="rb" defaultChecked />
                                <span className="c-text-sm">Option A</span>
                            </label>
                            <label className="c-flex c-items-center c-gap-2">
                                <input type="radio" name="rb" />
                                <span className="c-text-sm">Option B</span>
                            </label>
                        </div>
                    ),
                    code: `<label class="c-flex c-items-center c-gap-2">
  <input type="radio" name="r" checked />
  <span class="c-text-sm">Option A</span>
</label>`,
                },
                {
                    title: 'Range',
                    preview: <input type="range" min="0" max="100" defaultValue="60" style={{ width: '200px' }} />,
                    code: `<input type="range" min="0" max="100" value="60" />`,
                },
            ],
        },
    ],
    Select: [
        {
            title: 'Custom Select',
            rows: [
                {
                    title: 'Default',
                    preview: (
                        <div style={{ maxWidth: '280px' }}>
                            <CustomSelect id="s-def" defaultActive="Option One" options={['Option One', 'Option Two', 'Option Three', 'Option Four']} />
                        </div>
                    ),
                    code: `<div class="c-select-wrap">
  <input type="checkbox" class="c-select-toggle" id="s1">
  <label class="c-select-trigger" for="s1">
    <span class="c-select-value">Option One</span>
    <svg class="c-select-arrow">...</svg>
  </label>
  <ul class="c-select-dropdown">
    <li class="c-select-item c-select-item-active">Option One</li>
    <li class="c-select-item">Option Two</li>
    <li class="c-select-item">Option Three</li>
  </ul>
</div>`,
                },
                {
                    title: 'Small',
                    preview: (
                        <div style={{ maxWidth: '280px' }}>
                            <CustomSelect id="s-sm" size="sm" placeholder="Small select" options={['Option One', 'Option Two']} />
                        </div>
                    ),
                    code: `<div class="c-select-wrap c-select-wrap-sm">...</div>`,
                },
                {
                    title: 'Large',
                    preview: (
                        <div style={{ maxWidth: '280px' }}>
                            <CustomSelect id="s-lg" size="lg" placeholder="Large select" options={['Option One', 'Option Two']} />
                        </div>
                    ),
                    code: `<div class="c-select-wrap c-select-wrap-lg">...</div>`,
                },
                {
                    title: 'Error State',
                    preview: (
                        <div style={{ maxWidth: '280px' }}>
                            <CustomSelect id="s-err" placeholder="Error state" error options={['Option One', 'Option Two']} />
                        </div>
                    ),
                    code: `<div class="c-select-wrap c-select-wrap-error">...</div>`,
                },
                {
                    title: 'Success State',
                    preview: (
                        <div style={{ maxWidth: '280px' }}>
                            <CustomSelect id="s-suc" placeholder="Success state" success options={['Option One', 'Option Two']} />
                        </div>
                    ),
                    code: `<div class="c-select-wrap c-select-wrap-success">...</div>`,
                },
                {
                    title: 'Group & Divider',
                    preview: (
                        <div style={{ maxWidth: '280px' }} className="c-select-wrap">
                            <input type="checkbox" className="c-select-toggle" id="s-grp" />
                            <label className="c-select-trigger" htmlFor="s-grp">
                                <span className="c-select-value">Choose a category</span>
                                <svg className="c-select-arrow" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="m6 9 6 6 6-6" />
                                </svg>
                            </label>
                            <ul className="c-select-dropdown">
                                <li className="c-select-group-label">Fruits</li>
                                <li className="c-select-item" onClick={() => { document.getElementById('s-grp').checked = false }}>Apple</li>
                                <li className="c-select-item" onClick={() => { document.getElementById('s-grp').checked = false }}>Mango</li>
                                <li className="c-select-divider"></li>
                                <li className="c-select-group-label">Veggies</li>
                                <li className="c-select-item" onClick={() => { document.getElementById('s-grp').checked = false }}>Carrot</li>
                                <li className="c-select-item c-select-item-disabled">Disabled Item</li>
                            </ul>
                        </div>
                    ),
                    code: `<ul class="c-select-dropdown">
  <li class="c-select-group-label">Fruits</li>
  <li class="c-select-item">Apple</li>
  <li class="c-select-divider"></li>
  <li class="c-select-group-label">Veggies</li>
  <li class="c-select-item">Carrot</li>
  <li class="c-select-item c-select-item-disabled">Disabled</li>
</ul>`,
                },
                {
                    title: 'Native Select',
                    preview: (
                        <select className="c-select" style={{ maxWidth: '280px' }}>
                            <option>Option One</option>
                            <option>Option Two</option>
                            <option>Option Three</option>
                        </select>
                    ),
                    code: `<select class="c-select">
  <option>Option One</option>
  <option>Option Two</option>
</select>`,
                },
                {
                    title: 'Textarea',
                    preview: <textarea className="c-textarea" rows="3" placeholder="Write your message..." style={{ maxWidth: '400px' }} />,
                    code: `<textarea class="c-textarea" rows="4" placeholder="Write your message..."></textarea>`,
                },
            ],
        },
    ],
    Badges: [
        {
            title: 'Light Badges',
            rows: [
                { title: 'Primary', preview: <span className="c-px-3 c-py-1 c-rounded-full c-text-xs c-font-semibold c-bg-primary-100 c-text-primary-700">Primary</span>, code: `<span class="c-px-3 c-py-1 c-rounded-full c-text-xs c-font-semibold c-bg-primary-100 c-text-primary-700">Primary</span>` },
                { title: 'Success', preview: <span className="c-px-3 c-py-1 c-rounded-full c-text-xs c-font-semibold c-bg-success-100 c-text-success-700">Success</span>, code: `<span class="c-px-3 c-py-1 c-rounded-full c-text-xs c-font-semibold c-bg-success-100 c-text-success-700">Success</span>` },
                { title: 'Error', preview: <span className="c-px-3 c-py-1 c-rounded-full c-text-xs c-font-semibold c-bg-error-100 c-text-error-700">Error</span>, code: `<span class="c-px-3 c-py-1 c-rounded-full c-text-xs c-font-semibold c-bg-error-100 c-text-error-700">Error</span>` },
                { title: 'Warning', preview: <span className="c-px-3 c-py-1 c-rounded-full c-text-xs c-font-semibold c-bg-warning-100 c-text-warning-700">Warning</span>, code: `<span class="c-px-3 c-py-1 c-rounded-full c-text-xs c-font-semibold c-bg-warning-100 c-text-warning-700">Warning</span>` },
                { title: 'Info', preview: <span className="c-px-3 c-py-1 c-rounded-full c-text-xs c-font-semibold c-bg-info-100 c-text-info-700">Info</span>, code: `<span class="c-px-3 c-py-1 c-rounded-full c-text-xs c-font-semibold c-bg-info-100 c-text-info-700">Info</span>` },
            ],
        },
        {
            title: 'Solid Badges',
            rows: [
                { title: 'Primary', preview: <span className="c-px-3 c-py-1 c-rounded-full c-text-xs c-font-semibold c-bg-primary-500 c-text-white">Primary</span>, code: `<span class="c-px-3 c-py-1 c-rounded-full c-text-xs c-font-semibold c-bg-primary-500 c-text-white">Primary</span>` },
                { title: 'Success', preview: <span className="c-px-3 c-py-1 c-rounded-full c-text-xs c-font-semibold c-bg-success-500 c-text-white">Success</span>, code: `<span class="c-px-3 c-py-1 c-rounded-full c-text-xs c-font-semibold c-bg-success-500 c-text-white">Success</span>` },
                { title: 'Error', preview: <span className="c-px-3 c-py-1 c-rounded-full c-text-xs c-font-semibold c-bg-error-500 c-text-white">Error</span>, code: `<span class="c-px-3 c-py-1 c-rounded-full c-text-xs c-font-semibold c-bg-error-500 c-text-white">Error</span>` },
                { title: 'Warning', preview: <span className="c-px-3 c-py-1 c-rounded-full c-text-xs c-font-semibold c-bg-warning-500 c-text-white">Warning</span>, code: `<span class="c-px-3 c-py-1 c-rounded-full c-text-xs c-font-semibold c-bg-warning-500 c-text-white">Warning</span>` },
                { title: 'Info', preview: <span className="c-px-3 c-py-1 c-rounded-full c-text-xs c-font-semibold c-bg-info-500 c-text-white">Info</span>, code: `<span class="c-px-3 c-py-1 c-rounded-full c-text-xs c-font-semibold c-bg-info-500 c-text-white">Info</span>` },
            ],
        },
    ],
    'Form Groups': [
        {
            title: 'Form Groups',
            rows: [
                {
                    title: 'With Hint',
                    preview: (
                        <div className="c-form-group" style={{ maxWidth: '320px', marginBottom: 0 }}>
                            <label className="c-label c-label-required">Email</label>
                            <input type="email" className="c-input" placeholder="you@example.com" />
                            <span className="c-form-hint">We will never share your email.</span>
                        </div>
                    ),
                    code: `<div class="c-form-group">
  <label class="c-label c-label-required">Email</label>
  <input type="email" class="c-input" placeholder="you@example.com" />
  <span class="c-form-hint">We will never share your email.</span>
</div>`,
                },
                {
                    title: 'With Error',
                    preview: (
                        <div className="c-form-group" style={{ maxWidth: '320px', marginBottom: 0 }}>
                            <label className="c-label c-label-required">Password</label>
                            <input type="password" className="c-input c-input-error" placeholder="••••••••" />
                            <span className="c-form-error">Password must be at least 8 characters.</span>
                        </div>
                    ),
                    code: `<div class="c-form-group">
  <label class="c-label c-label-required">Password</label>
  <input type="password" class="c-input c-input-error" placeholder="••••••••" />
  <span class="c-form-error">Password must be at least 8 characters.</span>
</div>`,
                },
                {
                    title: 'Range Slider',
                    preview: <input type="range" min="0" max="100" defaultValue="60" style={{ width: '200px' }} />,
                    code: `<input type="range" min="0" max="100" value="60" />`,
                },
            ],
        },
    ],
}

export default function Components() {
    const [activeTab, setActiveTab] = useState('Buttons')

    return (
        <section id="components" style={{ padding: '96px 0', borderTop: '1px solid var(--c-border)' }}>
            <div className="c-container">

                <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                    <h2 className="c-text-4xl c-font-black c-mb-4">
                        Ready-made <span className="c-text-primary-500">Components</span>
                    </h2>
                    <p className="c-text-lg c-text-muted c-max-w-prose c-mx-auto">
                        Production-ready buttons, inputs, badges, and form elements — no JavaScript required.
                    </p>
                </div>

                <div
                    style={{
                        display: 'flex',
                        gap: '4px',
                        padding: '4px',
                        borderRadius: '12px',
                        backgroundColor: 'var(--c-gray-100)',
                        marginBottom: '32px',
                        overflowX: 'auto',
                    }}
                >
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            style={{
                                flex: 1,
                                minWidth: 'max-content',
                                padding: '8px 16px',
                                borderRadius: '8px',
                                fontSize: '13px',
                                fontWeight: 500,
                                cursor: 'pointer',
                                border: 'none',
                                whiteSpace: 'nowrap',
                                transition: 'all 200ms',
                                backgroundColor: activeTab === tab ? 'var(--c-bg)' : 'transparent',
                                color: activeTab === tab ? 'var(--c-primary-600)' : 'var(--c-muted)',
                                boxShadow: activeTab === tab ? 'var(--c-shadow-sm)' : 'none',
                            }}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                    {(tables[activeTab] || []).map((table) => (
                        <Table key={table.title} title={table.title} rows={table.rows} />
                    ))}
                </div>

            </div>
        </section>
    )
}