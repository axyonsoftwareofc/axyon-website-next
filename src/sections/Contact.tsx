// src/sections/Contact.tsx
'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { fadeInUp, staggerContainer } from '@/utils/animations';

interface FormErrors {
    name?: string;
    email?: string;
    projectType?: string;
    message?: string;
}

const Contact = () => {
    const t = useTranslations();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        projectType: '',
        message: ''
    });

    const [errors, setErrors] = useState<FormErrors>({});
    const [submitted, setSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = t('contact.form.errors.name.required');
        } else if (formData.name.trim().length < 3) {
            newErrors.name = t('contact.form.errors.name.min');
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim()) {
            newErrors.email = t('contact.form.errors.email.required');
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = t('contact.form.errors.email.invalid');
        }

        if (!formData.projectType) {
            newErrors.projectType = t('contact.form.errors.projectType.required');
        }

        if (!formData.message.trim()) {
            newErrors.message = t('contact.form.errors.message.required');
        } else if (formData.message.trim().length < 20) {
            newErrors.message = t('contact.form.errors.message.min');
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);

        try {
            await new Promise(resolve => setTimeout(resolve, 1500));
            console.log('Formulário enviado:', formData);
            setSubmitted(true);

            setTimeout(() => {
                setSubmitted(false);
                setFormData({
                    name: '',
                    email: '',
                    company: '',
                    projectType: '',
                    message: ''
                });
                setErrors({});
            }, 5000);
        } catch (error) {
            console.error('Erro ao enviar:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        if (errors[name as keyof FormErrors]) {
            setErrors(prev => ({ ...prev, [name]: undefined }));
        }
    };

    const contactMethods = [
        {
            icon: <Mail className="w-6 h-6" />,
            titleKey: 'contact.methods.email.title',
            details: 'contato@axyon.com.br',
            actionKey: 'contact.methods.email.action',
            href: 'mailto:contato@axyon.com.br'
        },
        {
            icon: <Phone className="w-6 h-6" />,
            titleKey: 'contact.methods.phone.title',
            details: '(11) 99999-9999',
            actionKey: 'contact.methods.phone.action',
            href: 'tel:+5511999999999'
        },
        {
            icon: <MapPin className="w-6 h-6" />,
            titleKey: 'contact.methods.office.title',
            detailsKey: 'contact.methods.office.details',
            actionKey: 'contact.methods.office.action',
            href: '#'
        }
    ];

    const projectTypes = [
        { key: 'contact.projectTypes.web', value: 'web' },
        { key: 'contact.projectTypes.mobile', value: 'mobile' },
        { key: 'contact.projectTypes.enterprise', value: 'enterprise' },
        { key: 'contact.projectTypes.ecommerce', value: 'ecommerce' },
        { key: 'contact.projectTypes.redesign', value: 'redesign' },
        { key: 'contact.projectTypes.consulting', value: 'consulting' },
        { key: 'contact.projectTypes.other', value: 'other' },
    ];

    const faqs = [
        {
            questionKey: 'contact.faq.1.question',
            answerKey: 'contact.faq.1.answer'
        },
        {
            questionKey: 'contact.faq.2.question',
            answerKey: 'contact.faq.2.answer'
        },
        {
            questionKey: 'contact.faq.3.question',
            answerKey: 'contact.faq.3.answer'
        }
    ];

    return (
        <section id="contact" className="py-20 md:py-32" style={{ backgroundColor: 'var(--surface-2)' }}>
            <div className="container mx-auto px-4 sm:px-6">
                <motion.div
                    initial={false}
                    whileInView="animate"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={staggerContainer}
                >
                    <div className="text-center mb-16 md:mb-20">
                        <motion.h2 variants={fadeInUp} className="mb-4 text-3xl md:text-4xl lg:text-5xl font-bold" style={{ color: 'var(--text-strong)' }}>
                            {t('contact.title')}
                        </motion.h2>
                        <motion.p variants={fadeInUp} className="text-lg md:text-xl max-w-2xl mx-auto" style={{ color: 'var(--muted)' }}>
                            {t('contact.subtitle')}
                        </motion.p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12">
                        <motion.div
                            variants={fadeInUp}
                            style={{
                                backgroundColor: 'var(--surface)',
                                borderColor: 'var(--border)'
                            }}
                            className="p-6 md:p-8 lg:p-10 rounded-2xl border shadow-lg"
                        >
                            {submitted ? (
                                <div className="text-center py-12">
                                    <CheckCircle className="w-20 h-20 text-green-500 dark:text-emerald-400 mx-auto mb-6" />
                                    <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--text-strong)' }}>
                                        {t('contact.form.success.title')}
                                    </h3>
                                    <p className="mb-6 text-lg" style={{ color: 'var(--muted)' }}>
                                        {t('contact.form.success.message')}
                                    </p>
                                    <button
                                        onClick={() => setSubmitted(false)}
                                        style={{ color: 'var(--primary)' }}
                                        className="hover:opacity-70 font-semibold text-lg transition-opacity"
                                    >
                                        {t('contact.form.success.button')}
                                    </button>
                                </div>
                            ) : (
                                <>
                                    <h3 className="text-2xl font-bold mb-8" style={{ color: 'var(--text-strong)' }}>
                                        {t('contact.form.title')}
                                    </h3>
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid md:grid-cols-2 gap-6">
                                            {/* Nome */}
                                            <div>
                                                <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-strong)' }}>
                                                    {t('contact.form.name')} {t('contact.form.required')}
                                                </label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    style={{
                                                        backgroundColor: 'var(--surface-2)',
                                                        borderColor: errors.name ? '#ef4444' : 'var(--border)',
                                                        color: 'var(--text)'
                                                    }}
                                                    className="w-full border rounded-lg px-4 py-3.5 focus:outline-none focus:border-primary transition-colors"
                                                    placeholder={t('contact.form.namePlaceholder')}
                                                />
                                                {errors.name && (
                                                    <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                                                        <AlertCircle className="w-4 h-4" />
                                                        {errors.name}
                                                    </p>
                                                )}
                                            </div>

                                            {/* Email */}
                                            <div>
                                                <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-strong)' }}>
                                                    {t('contact.form.email')} {t('contact.form.required')}
                                                </label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    style={{
                                                        backgroundColor: 'var(--surface-2)',
                                                        borderColor: errors.email ? '#ef4444' : 'var(--border)',
                                                        color: 'var(--text)'
                                                    }}
                                                    className="w-full border rounded-lg px-4 py-3.5 focus:outline-none focus:border-primary transition-colors"
                                                    placeholder={t('contact.form.emailPlaceholder')}
                                                />
                                                {errors.email && (
                                                    <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                                                        <AlertCircle className="w-4 h-4" />
                                                        {errors.email}
                                                    </p>
                                                )}
                                            </div>
                                        </div>

                                        {/* Empresa */}
                                        <div>
                                            <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-strong)' }}>
                                                {t('contact.form.company')}
                                            </label>
                                            <input
                                                type="text"
                                                name="company"
                                                value={formData.company}
                                                onChange={handleChange}
                                                style={{
                                                    backgroundColor: 'var(--surface-2)',
                                                    borderColor: 'var(--border)',
                                                    color: 'var(--text)'
                                                }}
                                                className="w-full border rounded-lg px-4 py-3.5 focus:outline-none focus:border-primary transition-colors"
                                                placeholder={t('contact.form.companyPlaceholder')}
                                            />
                                        </div>

                                        {/* Tipo de Projeto */}
                                        <div>
                                            <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-strong)' }}>
                                                {t('contact.form.projectType')} {t('contact.form.required')}
                                            </label>
                                            <select
                                                name="projectType"
                                                value={formData.projectType}
                                                onChange={handleChange}
                                                style={{
                                                    backgroundColor: 'var(--surface-2)',
                                                    borderColor: errors.projectType ? '#ef4444' : 'var(--border)',
                                                    color: 'var(--text)'
                                                }}
                                                className="w-full border rounded-lg px-4 py-3.5 focus:outline-none focus:border-primary transition-colors"
                                            >
                                                <option value="">{t('contact.form.projectTypePlaceholder')}</option>
                                                {projectTypes.map((type) => (
                                                    <option key={type.value} value={type.value}>
                                                        {t(type.key)}
                                                    </option>
                                                ))}
                                            </select>
                                            {errors.projectType && (
                                                <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                                                    <AlertCircle className="w-4 h-4" />
                                                    {errors.projectType}
                                                </p>
                                            )}
                                        </div>

                                        {/* Mensagem */}
                                        <div>
                                            <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-strong)' }}>
                                                {t('contact.form.message')} {t('contact.form.required')}
                                            </label>
                                            <textarea
                                                name="message"
                                                rows={5}
                                                value={formData.message}
                                                onChange={handleChange}
                                                style={{
                                                    backgroundColor: 'var(--surface-2)',
                                                    borderColor: errors.message ? '#ef4444' : 'var(--border)',
                                                    color: 'var(--text)'
                                                }}
                                                className="w-full border rounded-lg px-4 py-3.5 focus:outline-none focus:border-primary transition-colors resize-none"
                                                placeholder={t('contact.form.messagePlaceholder')}
                                            />
                                            {errors.message && (
                                                <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                                                    <AlertCircle className="w-4 h-4" />
                                                    {errors.message}
                                                </p>
                                            )}
                                            <p className="mt-1 text-xs" style={{ color: 'var(--muted)' }}>
                                                {formData.message.length} {t('contact.form.messageHint')}
                                            </p>
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="btn-primary w-full py-3.5 rounded-lg font-semibold text-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                                    {t('contact.form.submitting')}
                                                </>
                                            ) : (
                                                <>
                                                    <Send className="w-5 h-5" />
                                                    {t('contact.form.submit')}
                                                </>
                                            )}
                                        </button>
                                    </form>
                                </>
                            )}
                        </motion.div>

                        {/* Informações de Contato */}
                        <motion.div variants={fadeInUp}>
                            <h3 className="text-2xl font-bold mb-8" style={{ color: 'var(--text-strong)' }}>
                                {t('contact.methods.title')}
                            </h3>

                            <div className="space-y-6 mb-10">
                                {contactMethods.map((method, index) => (
                                    <div
                                        key={index}
                                        style={{
                                            backgroundColor: 'var(--surface)',
                                            borderColor: 'var(--border)'
                                        }}
                                        className="flex items-start gap-4 p-4 rounded-xl border hover:border-primary transition-colors duration-300"
                                    >
                                        <div className="icon-container w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                                            {method.icon}
                                        </div>
                                        <div>
                                            <h4 className="font-semibold mb-1" style={{ color: 'var(--text-strong)' }}>
                                                {t(method.titleKey)}
                                            </h4>
                                            <p className="mb-2" style={{ color: 'var(--muted)' }}>
                                                {method.detailsKey ? t(method.detailsKey) : method.details}
                                            </p>
                                            <a
                                                href={method.href}
                                                style={{ color: 'var(--primary)' }}
                                                className="text-sm font-medium hover:opacity-70 transition-opacity"
                                            >
                                                {t(method.actionKey)} →
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* FAQ Rápido */}
                            <div className="border-t pt-8" style={{ borderTopColor: 'var(--border)' }}>
                                <h4 className="font-semibold mb-4 text-lg" style={{ color: 'var(--text-strong)' }}>
                                    {t('contact.faq.title')}
                                </h4>
                                <div className="space-y-4">
                                    {faqs.map((faq, index) => (
                                        <div
                                            key={index}
                                            className="border-b pb-4 last:border-0"
                                            style={{ borderBottomColor: 'var(--border)' }}
                                        >
                                            <p className="font-medium mb-1" style={{ color: 'var(--text-strong)' }}>
                                                {t(faq.questionKey)}
                                            </p>
                                            <p className="text-sm" style={{ color: 'var(--muted)' }}>
                                                {t(faq.answerKey)}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;