import React from 'react';
import { Card as UnstyledCard, Input, Button, Form, DatePicker } from 'antd';
import { SaveOutlined } from '@ant-design/icons';
import { useCookies } from 'react-cookie';

import styled from 'styled-components';

const Card = styled(UnstyledCard)`
    width: 100%;
`;

const CandidateForm = () => {
    const [cookies, setCookie] = useCookies(['candidate']);

    const onFinish = (values) => {
        setCookie(
            'candidate',
            { ...values, bDay: values.bDay.format('MMMM Do YYYY, h:mm:ss a') },
            { path: '/' },
        );
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Card>
            <Form
                layout="horizontal"
                name="candidateForm"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}>
                <Form.Item
                    label="Nombres"
                    name="names"
                    rules={[
                        {
                            required: true,
                            message: 'Nombres del candidato requeridos',
                        },
                    ]}>
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Apellidos"
                    name="lastNames"
                    rules={[
                        {
                            required: true,
                            message: 'Apellidos del candidato requeridos',
                        },
                    ]}>
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Cédula"
                    name="id"
                    rules={[
                        {
                            required: true,
                            message:
                                'Cédula del candidato en números requerida',
                        },
                    ]}>
                    <Input type="number" />
                </Form.Item>

                <Form.Item
                    label="Fecha de nacimiento"
                    name="bDay"
                    type="date"
                    rules={[
                        {
                            required: true,
                            message:
                                'Fecha de nacimiento del candidato requerida',
                        },
                    ]}>
                    <DatePicker />
                </Form.Item>

                <Form.Item
                    label="email"
                    name="email"
                    rules={[
                        {
                            required: true,
                            type: 'email',
                            message: 'email valido del candidato requerid',
                        },
                    ]}>
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Usuario de Github"
                    name="githubUser"
                    rules={[
                        {
                            required: true,
                            message:
                                'Usuario de Github del candidato requerido',
                        },
                    ]}>
                    <Input />
                </Form.Item>

                <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        icon={<SaveOutlined />}
                        size="middle">
                        Guardar
                    </Button>
                </Form.Item>
            </Form>
        </Card>
    );
};

export default CandidateForm;
