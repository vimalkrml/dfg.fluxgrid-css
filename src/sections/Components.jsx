import { useState } from 'react'
import useInView from '../hooks/useInView'

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
            <label className="c-select-backdrop" htmlFor={id}></label>
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

const tabs = ['Buttons', 'Inputs', 'Select', 'Badges', 'Forms']

const data = {
    Buttons: [
        { title: 'Primary', code: `<button class="c-btn c-btn-primary">Primary</button>`, preview: <button className="c-btn c-btn-primary">Primary</button> },
        { title: 'Secondary', code: `<button class="c-btn c-btn-secondary">Secondary</button>`, preview: <button className="c-btn c-btn-secondary">Secondary</button> },
        { title: 'Outline', code: `<button class="c-btn c-btn-outline">Outline</button>`, preview: <button className="c-btn c-btn-outline">Outline</button> },
        { title: 'Ghost', code: `<button class="c-btn c-btn-ghost">Ghost</button>`, preview: <button className="c-btn c-btn-ghost">Ghost</button> },
        { title: 'Danger', code: `<button class="c-btn c-btn-danger">Danger</button>`, preview: <button className="c-btn c-btn-danger">Danger</button> },
        { title: 'Small', code: `<button class="c-btn c-btn-primary c-btn-sm">Small</button>`, preview: <button className="c-btn c-btn-primary c-btn-sm">Small</button> },
        { title: 'Large', code: `<button class="c-btn c-btn-primary c-btn-lg">Large</button>`, preview: <button className="c-btn c-btn-primary c-btn-lg">Large</button> },
        { title: 'Loading', code: `<button class="c-btn c-btn-primary c-btn-loading">Saving...</button>`, preview: <button className="c-btn c-btn-primary c-btn-loading">Saving</button> },
        { title: 'Disabled', code: `<button class="c-btn c-btn-primary" disabled>Disabled</button>`, preview: <button className="c-btn c-btn-primary" disabled>Disabled</button> },
    ],
    Inputs: [
        { title: 'Default', code: `<input class="c-input" placeholder="Enter text..." />`, preview: <input className="c-input" placeholder="Enter text..." /> },
        { title: 'Error', code: `<input class="c-input c-input-error" placeholder="Error" />`, preview: <input className="c-input c-input-error" placeholder="Error" /> },
        { title: 'Success', code: `<input class="c-input c-input-success" placeholder="Success" />`, preview: <input className="c-input c-input-success" placeholder="Success" /> },
        { title: 'Small', code: `<input class="c-input c-input-sm" placeholder="Small" />`, preview: <input className="c-input c-input-sm" placeholder="Small" /> },
        { title: 'Large', code: `<input class="c-input c-input-lg" placeholder="Large" />`, preview: <input className="c-input c-input-lg" placeholder="Large" /> },
        {
            title: 'Input Group',
            code: `<div class="c-input-group">\n  <span class="c-input-addon">https://</span>\n  <input class="c-input" placeholder="yoursite.com" />\n</div>`,
            preview: <div className="c-input-group"><span className="c-input-addon">https://</span><input className="c-input" placeholder="yoursite.com" /></div>,
        },
        {
            title: 'Checkbox',
            code: `<label class="c-flex c-items-center c-gap-2">\n  <input type="checkbox" checked />\n  <span>Accept terms</span>\n</label>`,
            preview: <label className="c-flex c-items-center c-gap-2"><input type="checkbox" defaultChecked /><span className="c-text-sm">Accept terms</span></label>,
        },
        {
            title: 'Radio',
            preview: (
                <div className="c-flex c-gap-4">
                    <label className="c-flex c-items-center c-gap-2"><input type="radio" name="r1" defaultChecked /><span className="c-text-sm">A</span></label>
                    <label className="c-flex c-items-center c-gap-2"><input type="radio" name="r1" /><span className="c-text-sm">B</span></label>
                </div>
            ),
            code: `<label class="c-flex c-items-center c-gap-2">\n  <input type="radio" name="r" checked />\n  <span>Option A</span>\n</label>`,
        },
        { title: 'Range', code: `<input type="range" min="0" max="100" value="60" />`, preview: <input type="range" min="0" max="100" defaultValue="60" className="c-w-100" /> },
    ],
    Select: [
        { title: 'Default', code: `<div class="c-select-wrap">...</div>`, preview: <CustomSelect id="cs1" defaultActive="Option One" options={['Option One', 'Option Two', 'Option Three']} /> },
        { title: 'Small', code: `<div class="c-select-wrap c-select-wrap-sm">...</div>`, preview: <CustomSelect id="cs2" size="sm" placeholder="Small" options={['One', 'Two']} /> },
        { title: 'Large', code: `<div class="c-select-wrap c-select-wrap-lg">...</div>`, preview: <CustomSelect id="cs3" size="lg" placeholder="Large" options={['One', 'Two']} /> },
        { title: 'Error', code: `<div class="c-select-wrap c-select-wrap-error">...</div>`, preview: <CustomSelect id="cs4" placeholder="Error state" error options={['One', 'Two']} /> },
        { title: 'Success', code: `<div class="c-select-wrap c-select-wrap-success">...</div>`, preview: <CustomSelect id="cs5" placeholder="Success state" success options={['One', 'Two']} /> },
        {
            title: 'Native',
            code: `<select class="c-select">\n  <option>One</option>\n  <option>Two</option>\n</select>`,
            preview: <select className="c-select"><option>Option One</option><option>Option Two</option></select>,
        },
        { title: 'Textarea', code: `<textarea class="c-textarea" rows="3"></textarea>`, preview: <textarea className="c-textarea" rows="3" placeholder="Message..." /> },
    ],
    Badges: [
        { title: 'Primary', code: `<span class="c-bg-primary-100 c-text-primary-700 ...">Primary</span>`, preview: <span className="c-px-3 c-py-1 c-rounded-full c-text-xs c-font-semibold c-bg-primary-100 c-text-primary-700">Primary</span> },
        { title: 'Success', code: `<span class="c-bg-success-100 c-text-success-700 ...">Success</span>`, preview: <span className="c-px-3 c-py-1 c-rounded-full c-text-xs c-font-semibold c-bg-success-100 c-text-success-700">Success</span> },
        { title: 'Error', code: `<span class="c-bg-error-100 c-text-error-700 ...">Error</span>`, preview: <span className="c-px-3 c-py-1 c-rounded-full c-text-xs c-font-semibold c-bg-error-100 c-text-error-700">Error</span> },
        { title: 'Warning', code: `<span class="c-bg-warning-100 c-text-warning-700 ...">Warning</span>`, preview: <span className="c-px-3 c-py-1 c-rounded-full c-text-xs c-font-semibold c-bg-warning-100 c-text-warning-700">Warning</span> },
        { title: 'Solid', code: `<span class="c-bg-primary-500 c-text-white ...">Primary</span>`, preview: <span className="c-px-3 c-py-1 c-rounded-full c-text-xs c-font-semibold c-bg-primary-500 c-text-white">Primary</span> },
    ],
    Forms: [
        {
            title: 'Form Group',
            code: `<div class="c-form-group">\n  <label class="c-label">Email</label>\n  <input class="c-input" />\n  <span class="c-form-hint">Hint text</span>\n</div>`,
            preview: (
                <div className="c-form-group" style={{ marginBottom: 0, maxWidth: '260px' }}>
                    <label className="c-label c-label-required">Email</label>
                    <input type="email" className="c-input" placeholder="you@example.com" />
                    <span className="c-form-hint">We will never share your email.</span>
                </div>
            ),
        },
        {
            title: 'Form Error',
            code: `<div class="c-form-group">\n  <input class="c-input c-input-error" />\n  <span class="c-form-error">Error text</span>\n</div>`,
            preview: (
                <div className="c-form-group" style={{ marginBottom: 0, maxWidth: '260px' }}>
                    <label className="c-label c-label-required">Password</label>
                    <input type="password" className="c-input c-input-error" placeholder="••••••••" />
                    <span className="c-form-error">Must be at least 8 characters.</span>
                </div>
            ),
        },
    ],
}

function Row({ item }) {
    const [showCode, setShowCode] = useState(false)
    return (
        <div className="c-border-b c-border-base">
            <div className="c-row c-items-center" style={{ minHeight: '56px' }}>
                <div className="c-col-12 c-col-md-3 c-py-2 c-md-py-3">
                    <span className="c-text-xs c-font-semibold c-text-muted c-uppercase c-tracking-wide">{item.title}</span>
                </div>
                <div className="c-col-12 c-col-md-9 c-py-3 c-flex c-items-center c-justify-between c-gap-3" style={{ flexWrap: 'wrap' }}>
                    <div style={{ minWidth: 0, maxWidth: '260px', width: '100%' }}>{item.preview}</div>
                    <button
                        onClick={() => setShowCode((v) => !v)}
                        className="c-btn c-btn-ghost c-btn-xs c-font-mono c-flex-shrink-0"
                    >
                        {showCode ? 'hide' : '</>'}
                    </button>
                </div>
            </div>
            {showCode && (
                <pre className="c-overflow-x-auto c-p-3 c-text-xs c-font-mono c-bg-gray-950 c-text-gray-100 c-rounded c-mb-3" style={{ margin: '0 0 12px', lineHeight: 1.7 }}>
                    <code>{item.code}</code>
                </pre>
            )}
        </div>
    )
}

export default function Components() {
    const [activeTab, setActiveTab] = useState('Buttons')
    const { ref: titleRef, inView: titleIn } = useInView()

    return (
        <section id="components" className="c-py-20 c-md-py-24 c-border-t c-border-base">
            <div className="c-container">
                <div
                    ref={titleRef}
                    className={titleIn ? 'c-animate-fade-in-up' : ''}
                    style={{ opacity: titleIn ? undefined : 0, willChange: 'opacity, transform', textAlign: 'center', marginBottom: '40px' }}
                >
                    <h2 className="c-text-3xl c-md-text-4xl c-font-black c-mb-4">
                        Ready-made <span className="c-text-primary-500">Components</span>
                    </h2>
                    <p className="c-text-base c-md-text-lg c-text-muted c-max-w-prose c-mx-auto">
                        Production-ready buttons, inputs, and form elements — no JavaScript required.
                    </p>
                </div>

                <div className="c-flex c-gap-1 c-p-1 c-rounded-lg c-bg-gray-100 c-mb-6 c-overflow-x-auto c-scrollbar-none">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`c-px-4 c-py-2 c-rounded-md c-text-sm c-font-medium c-transition-colors c-flex-shrink-0 ${activeTab === tab ? 'c-bg-base c-shadow-sm c-text-primary-600' : 'c-text-muted'}`}
                            style={{ border: 'none', cursor: 'pointer', whiteSpace: 'nowrap' }}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                <div className="c-rounded-xl c-border c-border-base c-overflow-hidden c-p-2 c-md-p-4">
                    {(data[activeTab] || []).map((item) => (
                        <Row key={item.title} item={item} />
                    ))}
                </div>
            </div>
        </section>
    )
}