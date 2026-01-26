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
        <section id="contact" className="py-20 md:py-32 bg-gray-50 dark:bg-gray-950">
            <div className="container mx-auto px-4 sm:px-6">
                <motion.div
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={staggerContainer}
                >
                    {/* Cabeçalho */}
                    <div className="text-center mb-16 md:mb-20">
                        <motion.h2 variants={fadeInUp} className="mb-4 text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100">
                            {t('contact.title')}
                        </motion.h2>
                        <motion.p variants={fadeInUp} className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
                            {t('contact.subtitle')}
                        </motion.p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Formulário */}
                        <motion.div
                            variants={fadeInUp}
                            className="bg-white dark:bg-gray-900 p-6 md:p-8 lg:p-10 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-shadow duration-300"
                        >
                            {submitted ? (
                                <div className="text-center py-12">
                                    <CheckCircle className="w-20 h-20 text-green-500 dark:text-emerald-400 mx-auto mb-6" />
                                    <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">
                                        {t('contact.form.success.title')}
                                    </h3>
                                    <p className="text-gray-700 dark:text-gray-400 mb-6 text-lg">
                                        {t('contact.form.success.message')}
                                    </p>
                                    <button
                                        onClick={() => setSubmitted(false)}
                                        className="text-blue-600 dark:text-cyan-400 hover:text-blue-700 dark:hover:text-cyan-300 font-semibold text-lg transition-colors"
                                    >
                                        {t('contact.form.success.button')}
                                    </button>
                                </div>
                            ) : (
                                <>
                                    <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-gray-100">
                                        {t('contact.form.title')}
                                    </h3>
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid md:grid-cols-2 gap-6">
                                            {/* Nome */}
                                            <div>
                                                <label className="block text-sm font-medium mb-2 text-gray-900 dark:text-gray-100">
                                                    {t('contact.form.name')} {t('contact.form.required')}
                                                </label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    className={`w-full bg-white dark:bg-gray-800 border ${
                                                        errors.name
                                                            ? 'border-red-500 focus:border-red-500'
                                                            : 'border-gray-300 dark:border-gray-700 focus:border-blue-500 dark:focus:border-cyan-400'
                                                    } rounded-lg px-4 py-3.5 focus:outline-none transition-colors text-gray-900 dark:text-gray-100`}
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
                                                <label className="block text-sm font-medium mb-2 text-gray-900 dark:text-gray-100">
                                                    {t('contact.form.email')} {t('contact.form.required')}
                                                </label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    className={`w-full bg-white dark:bg-gray-800 border ${
                                                        errors.email
                                                            ? 'border-red-500 focus:border-red-500'
                                                            : 'border-gray-300 dark:border-gray-700 focus:border-blue-500 dark:focus:border-cyan-400'
                                                    } rounded-lg px-4 py-3.5 focus:outline-none transition-colors text-gray-900 dark:text-gray-100`}
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
                                            <label className="block text-sm font-medium mb-2 text-gray-900 dark:text-gray-100">
                                                {t('contact.form.company')}
                                            </label>
                                            <input
                                                type="text"
                                                name="company"
                                                value={formData.company}
                                                onChange={handleChange}
                                                className="w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3.5 focus:outline-none focus:border-blue-500 dark:focus:border-cyan-400 transition-colors text-gray-900 dark:text-gray-100"
                                                placeholder={t('contact.form.companyPlaceholder')}
                                            />
                                        </div>

                                        {/* Tipo de Projeto */}
                                        <div>
                                            <label className="block text-sm font-medium mb-2 text-gray-900 dark:text-gray-100">
                                                {t('contact.form.projectType')} {t('contact.form.required')}
                                            </label>
                                            <select
                                                name="projectType"
                                                value={formData.projectType}
                                                onChange={handleChange}
                                                className={`w-full bg-white dark:bg-gray-800 border ${
                                                    errors.projectType
                                                        ? 'border-red-500 focus:border-red-500'
                                                        : 'border-gray-300 dark:border-gray-700 focus:border-blue-500 dark:focus:border-cyan-400'
                                                } rounded-lg px-4 py-3.5 focus:outline-none transition-colors text-gray-900 dark:text-gray-100`}
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
                                            <label className="block text-sm font-medium mb-2 text-gray-900 dark:text-gray-100">
                                                {t('contact.form.message')} {t('contact.form.required')}
                                            </label>
                                            <textarea
                                                name="message"
                                                rows={5}
                                                value={formData.message}
                                                onChange={handleChange}
                                                className={`w-full bg-white dark:bg-gray-800 border ${
                                                    errors.message
                                                        ? 'border-red-500 focus:border-red-500'
                                                        : 'border-gray-300 dark:border-gray-700 focus:border-blue-500 dark:focus:border-cyan-400'
                                                } rounded-lg px-4 py-3.5 focus:outline-none transition-colors resize-none text-gray-900 dark:text-gray-100`}
                                                placeholder={t('contact.form.messagePlaceholder')}
                                            />
                                            {errors.message && (
                                                <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                                                    <AlertCircle className="w-4 h-4" />
                                                    {errors.message}
                                                </p>
                                            )}
                                            <p className="mt-1 text-xs text-gray-600 dark:text-gray-400">
                                                {formData.message.length} {t('contact.form.messageHint')}
                                            </p>
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full bg-blue-600 dark:bg-cyan-400 text-white dark:text-gray-900 py-3.5 rounded-lg font-semibold text-lg hover:bg-blue-700 dark:hover:bg-cyan-300 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <div className="w-5 h-5 border-2 border-white dark:border-gray-900 border-t-transparent rounded-full animate-spin" />
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
                            <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-gray-100">
                                {t('contact.methods.title')}
                            </h3>

                            <div className="space-y-6 mb-10">
                                {contactMethods.map((method, index) => (
                                    <div
                                        key={index}
                                        className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
                                    >
                                        <div className="w-12 h-12 bg-blue-100 dark:bg-gray-800 rounded-lg flex items-center justify-center text-blue-600 dark:text-cyan-400 flex-shrink-0">
                                            {method.icon}
                                        </div>
                                        <div>
                                            <h4 className="font-semibold mb-1 text-gray-900 dark:text-gray-100">
                                                {t(method.titleKey)}
                                            </h4>
                                            <p className="text-gray-700 dark:text-gray-400 mb-2">
                                                {method.detailsKey ? t(method.detailsKey) : method.details}
                                            </p>
                                            <a
                                                href={method.href}
                                                className="text-blue-600 dark:text-cyan-400 text-sm font-medium hover:text-blue-700 dark:hover:text-cyan-300 transition-colors"
                                            >
                                                {t(method.actionKey)} →
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* FAQ Rápido */}
                            <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
                                <h4 className="font-semibold mb-4 text-lg text-gray-900 dark:text-gray-100">
                                    {t('contact.faq.title')}
                                </h4>
                                <div className="space-y-4">
                                    {faqs.map((faq, index) => (
                                        <div
                                            key={index}
                                            className="border-b border-gray-200 dark:border-gray-700 pb-4 last:border-0"
                                        >
                                            <p className="font-medium mb-1 text-gray-900 dark:text-gray-100">
                                                {t(faq.questionKey)}
                                            </p>
                                            <p className="text-sm text-gray-700 dark:text-gray-400">
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
